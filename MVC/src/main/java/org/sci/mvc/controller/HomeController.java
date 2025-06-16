package org.sci.mvc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/libros")
    public String libros() {
        return "libros";
    }

    @GetMapping("/calificaciones")
    public String calificaciones() {
        return "calificaciones";
    }

    @GetMapping("/cientifico")
    public String cientifico() {
        return "cientifico";
    }
}
