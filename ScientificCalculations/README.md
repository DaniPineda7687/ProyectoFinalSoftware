# ScientificCalculations

Aplicación Spring Boot que proporciona servicios de cálculos científicos computacionales intensivos. Incluye algoritmos de multiplicación de matrices paralela y estimación de π usando el método Monte Carlo.

## Requisitos

- JDK 21
- Maven (se usa el wrapper `mvnw`)

## Ejecución local

1. Construya el proyecto:
   ```bash
   ./mvnw package
   ```
2. Ejecute la aplicación:
   ```bash
   java -jar target/scientific-calculations-0.0.1-SNAPSHOT.jar
   ```
3. La API quedará disponible en `http://localhost:8083`.

## Uso de la API

### Endpoints disponibles

- **Saludo básico**

  - `GET /api/hello`
  - Retorna un mensaje de saludo simple

- **Multiplicación de matrices**

  - `POST /api/algorithms/matrix`
  - Multiplica dos matrices usando paralelización
  - Cuerpo de ejemplo:
    ```json
    {
    	"a": [
    		[1, 2],
    		[3, 4]
    	],
    	"b": [
    		[5, 6],
    		[7, 8]
    	],
    	"threads": 4
    }
    ```
  - Respuesta:
    ```json
    {
    	"result": [
    		[19, 22],
    		[43, 50]
    	]
    }
    ```

- **Estimación de π usando Monte Carlo**
  - `GET /api/algorithms/pi?iterations=1000000&threads=4`
  - Parámetros:
    - `iterations`: Número de iteraciones para el cálculo (long)
    - `threads`: Número de hilos para paralelización (int)
  - Respuesta:
    ```json
    {
    	"piEstimate": 3.141592653589793
    }
    ```

## Características técnicas

- **Multiplicación de matrices paralela**: Utiliza múltiples hilos para acelerar el cálculo de multiplicación de matrices grandes
- **Método Monte Carlo para π**: Implementa el algoritmo Monte Carlo con paralelización para estimar el valor de π
- **API REST**: Endpoints bien definidos con DTOs para entrada y salida de datos
- **Arquitectura limpia**: Separación clara entre capas de presentación, aplicación y dominio

## Ejecución con Docker

1. Construya la imagen:
   ```bash
   docker build -t scientific-calculations .
   ```
2. Inicie el contenedor:
   ```bash
   docker run -p 8083:8083 scientific-calculations
   ```
3. Acceda a la API en `http://localhost:8083`.

## Ejemplos de uso

### Multiplicar matrices 2x2

```bash
curl -X POST http://localhost:8083/api/algorithms/matrix \
  -H "Content-Type: application/json" \
  -d '{
    "a": [[1, 2], [3, 4]],
    "b": [[5, 6], [7, 8]],
    "threads": 2
  }'
```

### Estimar π con 1 millón de iteraciones

```bash
curl "http://localhost:8083/api/algorithms/pi?iterations=1000000&threads=4"
```

### Obtener saludo

```bash
curl http://localhost:8083/api/hello
```
