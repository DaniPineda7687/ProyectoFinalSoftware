package org.sci.serviciogestioncalificaciones.service.impl;

import java.util.List;

import org.sci.serviciogestioncalificaciones.model.Student;
import org.sci.serviciogestioncalificaciones.repository.StudentRepository;
import org.sci.serviciogestioncalificaciones.service.StudentService;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Student save(Student student) {
        return repository.save(student);
    }

    @Override
    public List<Student> findAll() {
        return repository.findAll();
    }
}
