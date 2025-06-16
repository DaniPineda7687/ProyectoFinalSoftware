// Archivo de configuración para URLs de APIs
const apiConfig = {
    // URLs de API para estudiantes
    students: {
        base: 'http://localhost:8081/api/students'
    },

    // URLs de API para libros
    libros: {
        base: 'http://localhost:8082/api/libros',
        obtenerPorId: function(id) { return `${this.base}/${id}`; },
        eliminar: function(id) { return `${this.base}/${id}`; }
    },

    // URLs de API para usuarios
    usuarios: {
        base: 'http://localhost:8082/api/usuarios',
        obtenerPorId: function(id) { return `${this.base}/${id}`; },
        eliminar: function(id) { return `${this.base}/${id}`; }
    },

    // URLs de API para préstamos
    prestamos: {
        base: 'http://localhost:8082/api/prestamos',
        solicitar: 'http://localhost:8082/api/prestamos/solicitar',
        devolver: function(prestamoId) { return `http://localhost:8082/api/prestamos/devolver/${prestamoId}`; }
    },

    // URLs de API para reportes
    reportes: {
        usuarios: 'http://localhost:8082/api/reportes/usuarios',
        multas: 'http://localhost:8082/api/reportes/multas',
        libros: 'http://localhost:8082/api/reportes/libros',
        librosPrestados: 'http://localhost:8082/api/reportes/libros-prestados'
    },

    // URLs de API para cursos
    courses: {
        base: 'http://localhost:8081/api/courses',
        enrollments: function(courseId) { return `http://localhost:8081/api/courses/${courseId}/enrollments`; }
    },

    // URLs de API para matrículas
    enrollments: {
        base: 'http://localhost:8081/api/enrollments'
    }
};