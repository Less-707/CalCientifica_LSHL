FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

COPY . .

WORKDIR /app/calculadora


RUN chmod +x ./gradlew
RUN ./gradlew build -x test
RUN find . -type f -name "*-SNAPSHOT.jar" ! -name "*-plain.jar" -exec cp {} /app.jar \
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

COPY --from=build /app.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]