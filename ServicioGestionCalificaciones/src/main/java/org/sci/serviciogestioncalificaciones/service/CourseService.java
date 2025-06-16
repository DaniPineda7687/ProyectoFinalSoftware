package org.sci.serviciogestioncalificaciones.service;

import java.util.List;

import org.sci.serviciogestioncalificaciones.model.Course;

public interface CourseService {
    Course save(Course course);
    List<Course> findAll();
    Course findById(Long id);
}
