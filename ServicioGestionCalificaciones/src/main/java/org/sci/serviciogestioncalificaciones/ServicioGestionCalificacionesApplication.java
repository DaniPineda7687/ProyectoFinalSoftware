package org.sci.serviciogestioncalificaciones;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(info = @Info(title = "API Gestion Calificaciones", version = "1.0",
        description = "Documentacion de la API"))
@SpringBootApplication
public class ServicioGestionCalificacionesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServicioGestionCalificacionesApplication.class, args);
	}

}
