console.log("Bienvenido a mi web :)");

document.addEventListener('DOMContentLoaded', function() {
    // Efecto de escritura y borrado dinámico
    const textElement = document.getElementById("dynamic-text");
    if (textElement) {
        const texts = [
            "Auditorías de ciberseguridad.",
            "Securización de sistemas.",
            "Bug Bounty.",
            "Pruebas de penetración (Penetration Testing).",
            "Análisis de vulnerabilidades.",
            "Exploitación de fallos de seguridad.",
            "Ingeniería inversa.",
            "Pruebas de seguridad en aplicaciones web.",
            "Análisis forense digital.",
            "Escaneo de redes y servicios.",
            "Evaluación de riesgos y amenazas.",
            "Análisis de seguridad en APIs.",
            "Reconocimiento y explotación de misconfiguraciones.",
            "Automatización de pruebas de seguridad.",
            "Desarrollo de exploits.",
            "Análisis de código fuente.",
            "Ciberinteligencia (OSINT).",
            "Análisis de seguridad en infraestructura.",
            "Técnicas de evasión y bypass.",
            "Pruebas de seguridad en entornos de nube.",
            "Gestión de parches y actualizaciones de seguridad.",
            "Auditorías de redes inalámbricas.",
            "Evaluación de seguridad en dispositivos IoT."
        ];
        
        let currentTextIndex = 0;
        let index = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[currentTextIndex];
            
            if (isDeleting) {
                // Borrado de texto
                textElement.innerHTML = currentText.substring(0, index - 1);
                index--;

                if (index === 0) {
                    isDeleting = false;
                    currentTextIndex = (currentTextIndex + 1) % texts.length;
                    setTimeout(type, 500); // Pausa antes de comenzar a escribir el nuevo texto
                } else {
                    setTimeout(type, 50); // Velocidad de borrado
                }
            } else {
                // Escritura de texto
                textElement.innerHTML = currentText.substring(0, index);
                index++;

                if (index === currentText.length) {
                    isDeleting = true;
                    setTimeout(type, 2000); // Pausa antes de comenzar a borrar
                } else {
                    setTimeout(type, 50); // Velocidad de escritura
                }
            }
        }

        type();
    }


    // Funcionalidad para ocultar/mostrar el header al hacer scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const delta = 5; // La cantidad mínima de scroll para ocultar el header

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - scrollTop) <= delta) return; // Evita cambios pequeños

        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            // Si se está desplazando hacia abajo y el scroll es mayor que la altura del header
            header.style.transform = 'translateY(-100%)'; // Oculta el header
        } else {
            // Si se está desplazando hacia arriba
            header.style.transform = 'translateY(0)'; // Muestra el header
        }

        lastScrollTop = scrollTop; // Actualiza la última posición del scroll
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible'); // Agrega la clase para hacer visible la carta
        }, index * 100); // Espaciado entre cada carta
    });
});
