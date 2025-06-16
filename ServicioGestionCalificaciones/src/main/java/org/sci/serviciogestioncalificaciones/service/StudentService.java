package org.sci.serviciogestioncalificaciones.service;

import java.util.List;

import org.sci.serviciogestioncalificaciones.model.Student;

public interface StudentService {
    Student save(Student student);
    List<Student> findAll();
}
