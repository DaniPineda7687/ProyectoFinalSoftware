package org.sci.serviciogestioncalificaciones.repository;

import org.sci.serviciogestioncalificaciones.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
