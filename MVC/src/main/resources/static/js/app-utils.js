// Funcionalidades avanzadas para la aplicación

// Función para crear partículas de fondo
function createParticles() {
    const particles = document.createElement('div');
    particles.className = 'particles';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particles.appendChild(particle);
    }
    
    document.body.appendChild(particles);
}

// Función para mostrar notificaciones toast mejoradas
function showToast(message, type = 'success', duration = 5000) {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    
    const icons = {
        success: 'fas fa-check-circle',
        error: 'fas fa-exclamation-triangle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-exclamation-circle'
    };
    
    toast.innerHTML = `
        <div class="toast-content">
            <i class="${icons[type]} me-2"></i>
            ${message}
            <button class="toast-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Agregar estilos si no existen
    if (!document.getElementById('toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'toast-styles';
        styles.innerHTML = `
            .toast-notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                max-width: 350px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                animation: slideInRight 0.3s ease-out;
                margin-bottom: 10px;
            }
            
            .toast-notification.success {
                background: linear-gradient(135deg, #28a745, #20c997);
                color: white;
            }
            
            .toast-notification.error {
                background: linear-gradient(135deg, #dc3545, #fd7e14);
                color: white;
            }
            
            .toast-notification.info {
                background: linear-gradient(135deg, #17a2b8, #6f42c1);
                color: white;
            }
            
            .toast-notification.warning {
                background: linear-gradient(135deg, #ffc107, #fd7e14);
                color: #333;
            }
            
            .toast-content {
                padding: 15px 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .toast-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                opacity: 0.7;
                transition: opacity 0.2s;
                margin-left: 10px;
            }
            
            .toast-close:hover {
                opacity: 1;
            }
            
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    // Auto-remove después del tiempo especificado
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideInRight 0.3s ease-out reverse';
            setTimeout(() => {
                if (toast.parentElement) {
                    toast.remove();
                }
            }, 300);
        }
    }, duration);
}

// Función para validar JSON
function validateJSON(jsonString) {
    try {
        const parsed = JSON.parse(jsonString);
        return { valid: true, data: parsed };
    } catch (error) {
        return { valid: false, error: error.message };
    }
}

// Función para formatear números grandes
function formatNumber(num) {
    if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
    }
    return num.toString();
}

// Función para animar contadores
function animateCounter(element, start, end, duration = 2000) {
    const range = end - start;
    const minTimer = 50;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const startTime = new Date().getTime();
    const endTime = startTime + duration;
    
    function run() {
        const now = new Date().getTime();
        const remaining = Math.max((endTime - now) / duration, 0);
        const value = Math.round(end - (remaining * range));
        
        element.innerHTML = formatNumber(value);
        
        if (value === end) {
            element.classList.add('counter');
        } else {
            setTimeout(run, minTimer);
        }
    }
    
    run();
}

// Función para agregar efectos de loading a los botones
function addLoadingState(button, loadingText = 'Cargando...') {
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = `<span class="loading me-2"></span>${loadingText}`;
    
    return function removeLoading() {
        button.disabled = false;
        button.innerHTML = originalText;
    };
}

// Función para detectar si el dispositivo prefiere modo oscuro
function detectDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Función para aplicar tema dinámico
function applyDynamicTheme() {
    const isDark = detectDarkMode();
    const body = document.body;
    
    if (isDark) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}

// Función para crear efectos de confetti (celebración)
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            top: -10px;
            left: ${Math.random() * 100}%;
            width: 8px;
            height: 8px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confetti-fall ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentElement) {
                confetti.remove();
            }
        }, 5000);
    }
    
    // Agregar estilos de animación para confetti
    if (!document.getElementById('confetti-styles')) {
        const styles = document.createElement('style');
        styles.id = 'confetti-styles';
        styles.innerHTML = `
            @keyframes confetti-fall {
                0% {
                    transform: translateY(-10px) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Función para mejorar la experiencia de los formularios
function enhanceForm(formElement) {
    const inputs = formElement.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Agregar efectos de focus
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            if (this.value) {
                this.parentElement.classList.add('has-value');
            } else {
                this.parentElement.classList.remove('has-value');
            }
        });
        
        // Validación en tiempo real
        input.addEventListener('input', function() {
            if (this.checkValidity()) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
                this.classList.add('is-invalid');
            }
        });
    });
}

// Función para crear un indicador de progreso
function createProgressBar(container, progress = 0) {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar-custom';
    progressBar.innerHTML = `
        <div class="progress-fill" style="width: ${progress}%"></div>
        <div class="progress-text">${progress}%</div>
    `;
    
    // Agregar estilos si no existen
    if (!document.getElementById('progress-styles')) {
        const styles = document.createElement('style');
        styles.id = 'progress-styles';
        styles.innerHTML = `
            .progress-bar-custom {
                width: 100%;
                height: 30px;
                background: rgba(0, 0, 0, 0.1);
                border-radius: 15px;
                position: relative;
                overflow: hidden;
                margin: 10px 0;
            }
            
            .progress-fill {
                height: 100%;
                background: linear-gradient(135deg, #667eea, #764ba2);
                border-radius: 15px;
                transition: width 0.3s ease;
                position: relative;
            }
            
            .progress-fill::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
                animation: progress-shine 2s infinite;
            }
            
            .progress-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: white;
                font-weight: bold;
                font-size: 12px;
                text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
            }
            
            @keyframes progress-shine {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        `;
        document.head.appendChild(styles);
    }
    
    container.appendChild(progressBar);
    
    return {
        update: function(newProgress) {
            const fill = progressBar.querySelector('.progress-fill');
            const text = progressBar.querySelector('.progress-text');
            fill.style.width = newProgress + '%';
            text.textContent = newProgress + '%';
        },
        remove: function() {
            progressBar.remove();
        }
    };
}

// Función para mejorar las tablas con características adicionales
function enhanceTable(tableElement) {
    // Agregar números de fila
    const tbody = tableElement.querySelector('tbody');
    if (tbody) {
        const rows = tbody.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.style.setProperty('--row-number', index + 1);
        });
    }
    
    // Agregar funcionalidad de ordenamiento (básica)
    const headers = tableElement.querySelectorAll('th');
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            sortTable(tableElement, index);
        });
    });
}

// Función básica de ordenamiento para tablas
function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    const isAscending = table.dataset.sortDirection !== 'asc';
    table.dataset.sortDirection = isAscending ? 'asc' : 'desc';
    
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();
        
        const aNum = parseFloat(aValue);
        const bNum = parseFloat(bValue);
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return isAscending ? aNum - bNum : bNum - aNum;
        }
        
        return isAscending ? 
            aValue.localeCompare(bValue) : 
            bValue.localeCompare(aValue);
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Crear partículas de fondo
    createParticles();
    
    // Aplicar tema dinámico
    applyDynamicTheme();
    
    // Escuchar cambios en el tema del sistema
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDynamicTheme);
    }
    
    // Mejorar todos los formularios
    document.querySelectorAll('form').forEach(enhanceForm);
    
    // Mejorar todas las tablas
    document.querySelectorAll('table').forEach(enhanceTable);
    
    // Agregar efectos stagger a elementos con clase específica
    document.querySelectorAll('.stagger-item').forEach((item, index) => {
        item.style.animationDelay = (index * 0.1) + 's';
        item.classList.add('stagger-animation');
    });
});

// Exportar funciones para uso global
window.AppUtils = {
    showToast,
    validateJSON,
    formatNumber,
    animateCounter,
    addLoadingState,
    createConfetti,
    createProgressBar,
    enhanceForm,
    enhanceTable
};
