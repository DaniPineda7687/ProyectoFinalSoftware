package org.sci.serviciogestioncalificaciones.service;

import java.util.List;

import org.sci.serviciogestioncalificaciones.model.Enrollment;

public interface EnrollmentService {
    Enrollment save(Enrollment enrollment);
    List<Enrollment> findByCourseId(Long courseId);
}
