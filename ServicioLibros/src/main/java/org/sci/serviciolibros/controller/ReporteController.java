package org.sci.serviciolibros.controller;

import org.sci.serviciolibros.dto.MultaConPrestamoDTO;
import org.sci.serviciolibros.model.Libro;
import org.sci.serviciolibros.model.Multa;
import org.sci.serviciolibros.model.Prestamo;
import org.sci.serviciolibros.model.Usuario;
import org.sci.serviciolibros.repository.ILibroRepository;
import org.sci.serviciolibros.repository.IUsuarioRepository;
import org.sci.serviciolibros.repository.IPrestamoRepository;
import org.sci.serviciolibros.repository.IMultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/reportes")
public class ReporteController {
    @Autowired
    private ILibroRepository libroRepository;
    @Autowired
    private IUsuarioRepository usuarioRepository;
    @Autowired
    private IPrestamoRepository prestamoRepository;
    @Autowired
    private IMultaRepository multaRepository;

    @GetMapping("/libros")
    public List<Libro> libros() {
        return libroRepository.findAll();
    }

    @GetMapping("/libros-prestados")
    public List<Libro> librosPrestados() {
        return libroRepository.findAll().stream()
                .filter(libro -> !libro.isDisponible())
                .collect(Collectors.toList());
    }

    @GetMapping("/usuarios")
    public List<Usuario> usuarios() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/multas")
    public List<MultaConPrestamoDTO> multas() {
        List<Multa> multas = multaRepository.findAll();
        return multas.stream().map(m -> {
            MultaConPrestamoDTO dto = new MultaConPrestamoDTO();
            dto.setId(m.getId());
            dto.setDiasRetraso(m.getDiasRetraso());
            dto.setMonto(m.getMonto());
            dto.setPrestamoId(m.getPrestamoId());
            Prestamo prestamo = m.getPrestamo();
            if (prestamo == null && m.getPrestamoId() != null) {
                prestamo = prestamoRepository.findById(m.getPrestamoId()).orElse(null);
            }
            if (prestamo != null) {
                // Mapear a PrestamoDTO
                org.sci.serviciolibros.dto.PrestamoDTO prestamoDTO = new org.sci.serviciolibros.dto.PrestamoDTO();
                prestamoDTO.setId(prestamo.getId());
                prestamoDTO.setUsuario(prestamo.getUsuario());
                prestamoDTO.setLibro(prestamo.getLibro());
                prestamoDTO.setFechaPrestamo(prestamo.getFechaPrestamo());
                prestamoDTO.setFechaEntrega(prestamo.getFechaEntrega());
                prestamoDTO.setFechaDevolucion(prestamo.getFechaDevolucion());
                dto.setPrestamo(prestamoDTO);
            }
            return dto;
        }).collect(Collectors.toList());
    }
}
