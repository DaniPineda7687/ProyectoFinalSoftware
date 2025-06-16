package org.sci.serviciogestioncalificaciones.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Enrollment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Course course;

    private Double gradeNumeric;

    private String gradeText;

    public Enrollment() {
    }

    public Enrollment(Student student, Course course, Double gradeNumeric, String gradeText) {
        this.student = student;
        this.course = course;
        this.gradeNumeric = gradeNumeric;
        this.gradeText = gradeText;
    }

    public Long getId() {
        return id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Double getGradeNumeric() {
        return gradeNumeric;
    }

    public void setGradeNumeric(Double gradeNumeric) {
        this.gradeNumeric = gradeNumeric;
    }

    public String getGradeText() {
        return gradeText;
    }

    public void setGradeText(String gradeText) {
        this.gradeText = gradeText;
    }
}
