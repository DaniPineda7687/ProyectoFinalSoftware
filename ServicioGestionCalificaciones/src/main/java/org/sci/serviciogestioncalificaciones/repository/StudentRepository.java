package org.sci.serviciogestioncalificaciones.repository;

import org.sci.serviciogestioncalificaciones.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
