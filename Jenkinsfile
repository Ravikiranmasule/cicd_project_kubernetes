pipeline {
    agent { label 'docker-agent' }

    options {
        skipDefaultCheckout()
        timeout(time: 1, unit: 'HOURS')
    }

    environment {
        SCANNER_HOME = tool 'SonarScanner' 
        DEFECTDOJO_URL = 'http://52.71.8.63:8080' 
        APP_URL = 'http://angular-frontend'
        DOCKERHUB_USER = 'ravikiranmasule' 
    }

    stages {
        stage('0. Pre-Flight & Permission') {
            steps {
                script {
                    echo "Checking if DefectDojo is alive..."
                    sh "curl -s --connect-timeout 5 ${DEFECTDOJO_URL}/api/v2/health_check/ || echo 'Warning: Dojo unreachable'"
                }
                echo "Cleaning memory safely..."
                sh 'sudo systemctl enable docker'
                sh 'docker update --restart always $(docker ps -q) || true'
                sh 'docker image prune -f' 
                sh 'sudo chmod -R 777 ${WORKSPACE} || true'
                checkout scm
                
                dir('security-tools') {
                    sh 'docker-compose -f sonarqube-compose.yml up -d'
                }
            }
        }

        stage('1. Build Backend (JAR)') {
            steps {
                dir('backend-hotellux') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('2. Build Frontend (Angular)') {
            steps {
                dir('frontend-hotellux') {
                    sh 'export NODE_OPTIONS=--openssl-legacy-provider && npm install && npm run build'
                }
            }
        }

        stage('3. SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') { 
                    sh """
                    export SONAR_SCANNER_OPTS="-Xmx512m"
                    ${SCANNER_HOME}/bin/sonar-scanner \
                    -Dsonar.projectKey=HotelLux-Project \
                    -Dsonar.projectName=HotelLux \
                    -Dsonar.sources=. \
                    -Dsonar.java.binaries=backend-hotellux/target/classes \
                    -Dsonar.javascript.node.maxspace=1024
                    """
                }
            }
        }

        stage('4. Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true 
                }
            }
        }

        stage('5. SCA Scan (Snyk)') {
            steps {
                withCredentials([string(credentialsId: 'snyk-token', variable: 'SNYK_TOKEN')]) {
                    sh "docker run --rm -e SNYK_TOKEN=${SNYK_TOKEN} -v \$(pwd):/app snyk/snyk:maven snyk test --json > snyk-report.json || true"
                }
            }
        }

        stage('6. SCA Scan (Dependency-Check)') {
            steps {
                script {
                    def dpCheckHome = tool 'DP-Check'
                    withCredentials([string(credentialsId: 'nvd-api-key', variable: 'NVD_KEY')]) {
                        // FIX: Removed unrecognized '--nodeAuditSkipExit' and added '--disableYarnAudit'
                        sh """
                        ${dpCheckHome}/bin/dependency-check.sh --project HotelLux \
                        --scan . --format ALL --out . \
                        --nvdApiKey ${NVD_KEY} \
                        --disableYarnAudit || true
                        """
                    }
                }
            }
        }

        stage('7. Trivy File System Scan') {
            steps {
                sh 'docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/tmp aquasec/trivy fs --severity HIGH,CRITICAL --format json --output /tmp/trivy-fs-report.json /tmp'
            }
        }

        stage('8. Trivy Image Scan') {
            steps {
                sh 'docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/tmp aquasec/trivy image --severity HIGH,CRITICAL --format json --output /tmp/trivy-report.json mysql:8.0'
            }
        }

        stage('9. Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', 
                                 usernameVariable: 'DOCKER_USER', 
                                 passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                    echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
                    docker tag hotellux-app-build_backend:latest \$DOCKER_USER/hotellux-backend:latest
                    docker tag hotellux-app-build_frontend:latest \$DOCKER_USER/hotellux-frontend:latest
                    docker push \$DOCKER_USER/hotellux-backend:latest
                    docker push \$DOCKER_USER/hotellux-frontend:latest
                    """
                }
            }
        }

        stage('10. Create Engagement & Upload Reports') {
            steps {
                withCredentials([string(credentialsId: 'defectdojo-token', variable: 'DOJO_TOKEN')]) {
                    sh """
                    # Create Engagement
                    curl -X POST "${DEFECTDOJO_URL}/api/v2/engagements/" \
                         -H "Authorization: Token \$DOJO_TOKEN" \
                         -H "Content-Type: multipart/form-data" \
                         -F "name=CI/CD Build ${env.BUILD_NUMBER}" \
                         -F "target_start=\$(date +%Y-%m-%d)" \
                         -F "target_end=\$(date -d '+1 day' +%Y-%m-%d)" \
                         -F "product=1" -F "status=In Progress" -F "engagement_type=CI/CD"

                    # Upload Trivy
                    curl -X POST "${DEFECTDOJO_URL}/api/v2/import-scan/" -H "Authorization: Token \$DOJO_TOKEN" \
                         -F "active=true" -F "scan_type=Trivy Scan" -F "product_name=HotelLux" \
                         -F "engagement_name=CI/CD Build ${env.BUILD_NUMBER}" -F "file=@trivy-report.json"

                    # FIX: Added check to prevent Exit Code 26 if file is missing
                    if [ -f dependency-check-report.xml ]; then
                        curl -X POST "${DEFECTDOJO_URL}/api/v2/import-scan/" -H "Authorization: Token \$DOJO_TOKEN" \
                             -F "active=true" -F "scan_type=Dependency Check Scan" -F "product_name=HotelLux" \
                             -F "engagement_name=CI/CD Build ${env.BUILD_NUMBER}" -F "file=@dependency-check-report.xml"
                    else
                        echo "Warning: dependency-check-report.xml not found. Skipping upload."
                    fi
                    """
                }
            }
        }

        stage('11. Docker Deploy') {
            steps {
                sh 'docker rm -f prometheus || true' 
                sh 'docker-compose down --remove-orphans || true'
                sh 'docker-compose up -d --build'
                sh 'sleep 30' 
            }
        }

        stage('12. Final Security Sync (ZAP & Sonar)') {
            steps {
                withCredentials([string(credentialsId: 'defectdojo-token', variable: 'DOJO_TOKEN')]) {
                    sh """
                    docker run --user root --network hotellux-app-build_hotel-network --rm -v \$(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \
                        -t ${APP_URL} -x zap-report.xml || true
                    
                    if [ -f zap-report.xml ]; then
                        curl -X POST "${DEFECTDOJO_URL}/api/v2/import-scan/" -H "Authorization: Token \$DOJO_TOKEN" \
                             -F "active=true" -F "scan_type=ZAP Scan" -F "product_name=HotelLux" \
                             -F "engagement_name=CI/CD Build ${env.BUILD_NUMBER}" -F "file=@zap-report.xml"
                    fi

                    curl -X POST "${DEFECTDOJO_URL}/api/v2/import-scan/" -H "Authorization: Token \$DOJO_TOKEN" \
                         -F "active=true" -F "scan_type=SonarQube API Import" -F "product_name=HotelLux" \
                         -F "engagement_name=CI/CD Build ${env.BUILD_NUMBER}"
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs() 
            sh 'docker image prune -f' 
        }
        success { echo "SUCCESS: HotelLux DevSecOps Build #${env.BUILD_NUMBER} Finished!" }
        failure { echo "FAILURE: Build #${env.BUILD_NUMBER} failed." }
    }
}
