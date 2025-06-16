# Servicio Gestion Calificaciones

Esta aplicacion permite registrar estudiantes, cursos y sus calificaciones en una base de datos H2. Se exponen endpoints REST para crear y consultar la informacion.

## Requisitos
- JDK 17
- Maven (se usa el wrapper `mvnw`)

## Ejecucion local
1. Construya el proyecto:
   ```bash
   ./mvnw package
   ```
2. Ejecute la aplicacion:
   ```bash
   java -jar target/ServicioGestionCalificaciones-0.0.1-SNAPSHOT.jar
   ```
3. La API quedara disponible en `http://localhost:8080`.

La consola de H2 esta habilitada en `/h2-console`.
La documentacion Swagger UI esta disponible en `/swagger-ui.html`.

## Uso de la API
- **Crear estudiante**
  - `POST /api/students`
  - Cuerpo de ejemplo:
    ```json
    { "name": "Juan Perez" }
    ```
- **Listar estudiantes**
  - `GET /api/students`

- **Crear curso**
  - `POST /api/courses`
  - Cuerpo de ejemplo:
    ```json
    { "name": "Matematicas", "gradeType": "CUANTITATIVA" }
    ```
- **Listar cursos**
  - `GET /api/courses`

- **Matricular estudiante en un curso**
  - `POST /api/enrollments`
  - Cuerpo de ejemplo:
    ```json
    {
      "student": { "id": 1 },
      "course": { "id": 1 },
      "gradeNumeric": 4.5,
      "gradeText": null
    }
    ```
- **Consultar notas por curso**
  - `GET /api/courses/{id}/enrollments`

## Ejecucion con Docker
1. Construya la imagen:
   ```bash
   docker build -t sgc .
   ```
2. Inicie el contenedor:
   ```bash
   docker run -p 8080:8080 sgc
   ```
3. Acceda a la API en `http://localhost:8080`.
