// Archivo de configuración para URLs de APIs
// Detecta si está en Docker o en desarrollo local
const isDocker = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const baseLibros = isDocker ? 'http://localhost:8082' : 'http://localhost:8082';
const baseCalificaciones = isDocker ? 'http://localhost:8081' : 'http://localhost:8081';

const apiConfig = {
    // URLs de API para estudiantes
    students: {
        base: `${baseCalificaciones}/api/students`
    },

    // URLs de API para libros
    libros: {
        base: `${baseLibros}/api/libros`,
        obtenerPorId: function(id) { return `${this.base}/${id}`; },
        eliminar: function(id) { return `${this.base}/${id}`; }
    },

    // URLs de API para usuarios
    usuarios: {
        base: `${baseLibros}/api/usuarios`,
        obtenerPorId: function(id) { return `${this.base}/${id}`; },
        eliminar: function(id) { return `${this.base}/${id}`; }
    },

    // URLs de API para préstamos
    prestamos: {
        base: `${baseLibros}/api/prestamos`,
        solicitar: `${baseLibros}/api/prestamos/solicitar`,
        devolver: function(prestamoId) { return `${baseLibros}/api/prestamos/devolver/${prestamoId}`; }
    },

    // URLs de API para reportes
    reportes: {
        usuarios: `${baseLibros}/api/reportes/usuarios`,
        multas: `${baseLibros}/api/reportes/multas`,
        libros: `${baseLibros}/api/reportes/libros`,
        librosPrestados: `${baseLibros}/api/reportes/libros-prestados`
    },

    // URLs de API para cursos
    courses: {
        base: `${baseCalificaciones}/api/courses`,
        enrollments: function(courseId) { return `${baseCalificaciones}/api/courses/${courseId}/enrollments`; }
    },

    // URLs de API para matrículas
    enrollments: {
        base: `${baseCalificaciones}/api/enrollments`
    }
};