pipeline {
    agent { label 'docker-agent' }

    options {
        skipDefaultCheckout()
        timeout(time: 1, unit: 'HOURS')
    }

    environment {
        SCANNER_HOME = tool 'SonarScanner' 
        DEFECTDOJO_URL = 'http://52.71.8.63:8080' 
        APP_URL = 'http://18.215.15.53:30080' 
        DOCKERHUB_USER = 'ravikiranmasule' 
    }

    stages {
       stage('0. Pre-Flight & Tooling') {
    steps {
        checkout scm 
        
        // The '|| true' at the end is CRITICAL to prevent the build from failing
        sh 'docker rm -f sonar-postgres sonarqube prometheus grafana blackbox-exporter || true'
        
        script {
            sh "curl -s --connect-timeout 5 ${DEFECTDOJO_URL}/api/v2/health_check/ || echo 'Warning: Dojo unreachable'"
        }
        
        dir('security-tools') {
            sh 'docker-compose -f sonarqube-compose.yml up -d'
        }
        
        sh 'docker-compose up -d prometheus grafana blackbox-exporter'
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
                    -Dsonar.java.binaries=backend-hotellux/target/classes
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
                sh 'docker run --rm -v $(pwd):/tmp aquasec/trivy fs --severity HIGH,CRITICAL --format json --output /tmp/trivy-fs-report.json /tmp'
            }
        }

        stage('9. Push Unique K8s Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', 
                                 usernameVariable: 'DOCKER_USER', 
                                 passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                    echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
                    
                    docker tag hotellux-app-build_backend:latest \$DOCKER_USER/hotellux-k8s-backend:v${env.BUILD_NUMBER}
                    docker tag hotellux-app-build_frontend:latest \$DOCKER_USER/hotellux-k8s-frontend:v${env.BUILD_NUMBER}
                    
                    docker push \$DOCKER_USER/hotellux-k8s-backend:v${env.BUILD_NUMBER}
                    docker push \$DOCKER_USER/hotellux-k8s-frontend:v${env.BUILD_NUMBER}
                    """
                }
            }
        }

        stage('10. DefectDojo Reporting') {
            steps {
                withCredentials([string(credentialsId: 'defectdojo-token', variable: 'DOJO_TOKEN')]) {
                    sh """
                    curl -X POST "${DEFECTDOJO_URL}/api/v2/engagements/" \
                         -H "Authorization: Token \$DOJO_TOKEN" \
                         -H "Content-Type: multipart/form-data" \
                         -F "name=K8s Build ${env.BUILD_NUMBER}" \
                         -F "target_start=\$(date +%Y-%m-%d)" \
                         -F "target_end=\$(date -d '+1 day' +%Y-%m-%d)" \
                         -F "product=1" -F "status=In Progress" -F "engagement_type=CI/CD"

                    [ -f trivy-fs-report.json ] && curl -X POST "${DEFECTDOJO_URL}/api/v2/import-scan/" -H "Authorization: Token \$DOJO_TOKEN" \
                         -F "active=true" -F "scan_type=Trivy Scan" -F "product_name=HotelLux" \
                         -F "engagement_name=K8s Build ${env.BUILD_NUMBER}" -F "file=@trivy-fs-report.json"
                    """
                }
            }
        }

        stage('11. Kubernetes Dynamic Deploy') {
            steps {
                withKubeConfig([credentialsId: 'k3s-config']) {
                    sh """
                    sed -i 's|ravikiranmasule/hotellux-k8s-backend:.*|ravikiranmasule/hotellux-k8s-backend:v${env.BUILD_NUMBER}|g' k8s/backend.yaml
                    sed -i 's|ravikiranmasule/hotellux-k8s-frontend:.*|ravikiranmasule/hotellux-k8s-frontend:v${env.BUILD_NUMBER}|g' k8s/frontend.yaml
                    
                    kubectl apply -f k8s/
                    
                    kubectl rollout status deployment/hotellux-backend
                    kubectl rollout status deployment/hotellux-frontend
                    """
                }
            }
        }

        stage('12. DAST Scan (ZAP)') {
            steps {
                withCredentials([string(credentialsId: 'defectdojo-token', variable: 'DOJO_TOKEN')]) {
                    sh """
                    docker run --user root --rm -v \$(pwd):/zap/wrk/:rw -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \
                        -t ${APP_URL} -x zap-report.xml || true
                    
                    [ -f zap-report.xml ] && curl -X POST "${DEFECTDOJO_URL}/api/v2/import-scan/" -H "Authorization: Token \$DOJO_TOKEN" \
                             -F "active=true" -F "scan_type=ZAP Scan" -F "product_name=HotelLux" \
                             -F "engagement_name=K8s Build ${env.BUILD_NUMBER}" -F "file=@zap-report.xml"
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
        success { echo "SUCCESS: HotelLux K8s Build #${env.BUILD_NUMBER} Deployed!" }
        failure { echo "FAILURE: Build #${env.BUILD_NUMBER} failed." }
    }
}
