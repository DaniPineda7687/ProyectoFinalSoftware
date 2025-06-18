# ---------- build ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

COPY pom.xml .
COPY .mvn      .mvn
RUN mvn -B -ntp dependency:go-offline

COPY src src
COPY --chmod=755 mvnw mvnw
RUN ./mvnw -B -ntp package -DskipTests

# ---------- runtime ----------
FROM eclipse-temurin:21-jre
WORKDIR /app

COPY --from=build /app/target/scientific-calculations-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8083
ENTRYPOINT ["java","-jar","/app/app.jar"] 