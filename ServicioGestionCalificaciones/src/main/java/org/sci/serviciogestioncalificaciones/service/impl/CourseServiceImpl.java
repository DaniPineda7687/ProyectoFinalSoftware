package org.sci.serviciogestioncalificaciones.service.impl;

import java.util.List;
import java.util.Optional;

import org.sci.serviciogestioncalificaciones.model.Course;
import org.sci.serviciogestioncalificaciones.repository.CourseRepository;
import org.sci.serviciogestioncalificaciones.service.CourseService;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {

    private final CourseRepository repository;

    public CourseServiceImpl(CourseRepository repository) {
        this.repository = repository;
    }

    @Override
    public Course save(Course course) {
        return repository.save(course);
    }

    @Override
    public List<Course> findAll() {
        return repository.findAll();
    }

    @Override
    public Course findById(Long id) {
        Optional<Course> optional = repository.findById(id);
        return optional.orElse(null);
    }
}
