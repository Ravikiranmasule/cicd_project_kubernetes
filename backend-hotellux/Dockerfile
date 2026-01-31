# Use a slim JRE 17 image (Runtime is enough to run a JAR)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the JAR from your local target folder
COPY target/UserManagementModule-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 9191

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]
