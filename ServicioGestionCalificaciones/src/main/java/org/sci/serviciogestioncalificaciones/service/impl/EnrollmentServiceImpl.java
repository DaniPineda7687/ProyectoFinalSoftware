package org.sci.serviciogestioncalificaciones.service.impl;

import java.util.List;

import org.sci.serviciogestioncalificaciones.model.Course;
import org.sci.serviciogestioncalificaciones.model.Enrollment;
import org.sci.serviciogestioncalificaciones.repository.CourseRepository;
import org.sci.serviciogestioncalificaciones.repository.EnrollmentRepository;
import org.sci.serviciogestioncalificaciones.service.EnrollmentService;
import org.springframework.stereotype.Service;

@Service
public class EnrollmentServiceImpl implements EnrollmentService {

    private final EnrollmentRepository repository;
    private final CourseRepository courseRepository;

    public EnrollmentServiceImpl(EnrollmentRepository repository, CourseRepository courseRepository) {
        this.repository = repository;
        this.courseRepository = courseRepository;
    }

    @Override
    public Enrollment save(Enrollment enrollment) {
        return repository.save(enrollment);
    }

    @Override
    public List<Enrollment> findByCourseId(Long courseId) {
        Course course = courseRepository.findById(courseId).orElse(null);
        return course != null ? repository.findByCourse(course) : List.of();
    }
}
