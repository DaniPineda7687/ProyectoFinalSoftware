# ---------- build ----------
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Evita el crash
ENV JAVA_TOOL_OPTIONS="-XX:UseSVE=0"

COPY pom.xml .
COPY .mvn      .mvn
RUN mvn -B -ntp dependency:go-offline

COPY src src
COPY --chmod=755 mvnw mvnw
RUN ./mvnw -B -ntp package -DskipTests

# ---------- runtime ----------
FROM eclipse-temurin:21-jre
WORKDIR /app
# Misma mitigación en la imagen final (por si haces java -jar allí)
ENV JAVA_TOOL_OPTIONS="-XX:UseSVE=0"

COPY --from=build /app/target/ServicioGestionCalificaciones-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/app/app.jar"]