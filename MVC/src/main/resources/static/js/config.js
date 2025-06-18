const isDocker = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const baseLibros = isDocker ? 'http://localhost:8082' : 'http://localhost:8082';
const baseCalificaciones = isDocker ? 'http://localhost:8081' : 'http://localhost:8081';
const baseCientifico = isDocker ? 'http://localhost:8083' : 'http://localhost:8083';

const apiConfig = {
    students: {
        base: `${baseCalificaciones}/api/students`
    },

    libros: {
        base: `${baseLibros}/api/libros`,
        obtenerPorId: function (id) { return `${this.base}/${id}`; },
        eliminar: function (id) { return `${this.base}/${id}`; }
    },

    usuarios: {
        base: `${baseLibros}/api/usuarios`,
        obtenerPorId: function (id) { return `${this.base}/${id}`; },
        eliminar: function (id) { return `${this.base}/${id}`; }
    },

    prestamos: {
        base: `${baseLibros}/api/prestamos`,
        solicitar: `${baseLibros}/api/prestamos/solicitar`,
        devolver: function (prestamoId) { return `${baseLibros}/api/prestamos/devolver/${prestamoId}`; }
    },

    reportes: {
        usuarios: `${baseLibros}/api/reportes/usuarios`,
        multas: `${baseLibros}/api/reportes/multas`,
        libros: `${baseLibros}/api/reportes/libros`,
        librosPrestados: `${baseLibros}/api/reportes/libros-prestados`
    },

    courses: {
        base: `${baseCalificaciones}/api/courses`,
        enrollments: function (courseId) { return `${baseCalificaciones}/api/courses/${courseId}/enrollments`; }
    },

    enrollments: {
        base: `${baseCalificaciones}/api/enrollments`
    },

    cientifico: {
        hello: `${baseCientifico}/api/hello`,
        matrix: `${baseCientifico}/api/algorithms/matrix`,
        pi: `${baseCientifico}/api/algorithms/pi`
    }
};