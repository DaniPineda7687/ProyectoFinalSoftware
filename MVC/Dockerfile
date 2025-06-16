# ---------- build ----------
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Evita el crash en algunos sistemas
ENV JAVA_TOOL_OPTIONS="-XX:UseSVE=0"

# Copia archivos de configuración de Maven
COPY pom.xml .
COPY mvnw .
COPY mvnw.cmd .
COPY .mvn .mvn

# Descarga dependencias
RUN mvn -B -ntp dependency:go-offline

# Copia código fuente y construye la aplicación
COPY src src
RUN mvn -B -ntp clean package -DskipTests

# ---------- runtime ----------
FROM eclipse-temurin:17-jre
WORKDIR /app

# Misma mitigación en la imagen final
ENV JAVA_TOOL_OPTIONS="-XX:UseSVE=0"

# Copia el JAR construido desde la etapa de build
COPY --from=build /app/target/MVC-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto 8080 (por defecto de Spring Boot)
EXPOSE 8080

# Define el punto de entrada
ENTRYPOINT ["java", "-jar", "app.jar"]
