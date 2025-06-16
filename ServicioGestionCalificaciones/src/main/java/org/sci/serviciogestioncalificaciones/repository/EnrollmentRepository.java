package org.sci.serviciogestioncalificaciones.repository;

import java.util.List;

import org.sci.serviciogestioncalificaciones.model.Course;
import org.sci.serviciogestioncalificaciones.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    List<Enrollment> findByCourse(Course course);
}
