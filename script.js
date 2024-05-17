document.addEventListener("DOMContentLoaded", function() {
    // Asegurarse de que las animaciones se apliquen una vez que el DOM esté completamente cargado
    const titles = document.querySelectorAll('.animate-title');
    const texts = document.querySelectorAll('.animate-text');
    const heroElements = document.querySelectorAll('.hero-content h1, .hero-content h3');

    // Animaciones para títulos y textos generales
    titles.forEach((title, index) => {
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 200 * index); // retardo para cada título
    });

    texts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 * index); // retardo para cada texto
    });

    // Animaciones para elementos en la sección hero
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 1700); // Retardo entre cada línea
    });

    // Animación de las tarjetas de servicio
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
        }, 300 * index); // retardo para cada tarjeta
    });

    // Animación de las imágenes
    const images = document.querySelectorAll('.img-fluid');
    images.forEach(function(img) {
        img.onload = function() {
            img.classList.add('loaded');
        }
    });

    // Mostrar el carrusel cuando el documento esté cargado
    const carousel = document.getElementById("carouselExampleIndicators");
    if (carousel) {
        carousel.classList.add("show");
    }

    // Mostrar encabezado al cargar la página
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = 'translateY(0)';
    }

    // Animación de los botones flotantes
    const buttons = document.querySelectorAll(".floating-button");
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.transform = "translateY(0)";
            button.style.opacity = "1";
        }, index * 100);
    });
});

// Manejo del desplazamiento para mostrar/ocultar el encabezado
let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        header.style.transform = 'translateY(-100%)';
    } else if (scrollTop < lastScrollTop && scrollTop < (bodyHeight - windowHeight) && scrollTop > (bodyHeight * 0.1)) {
        header.style.transform = 'translateY(-100%)';
    } else if (scrollTop < (windowHeight * 0.9) && scrollTop > 0) {
        header.style.transform = 'translateY(0)';
    } else if (scrollTop + windowHeight >= bodyHeight) {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}

window.addEventListener('scroll', handleScroll);

window.addEventListener('load', function() {
    const carouselHeight = document.getElementById('carouselSection').offsetTop;
    window.scrollTo({
        top: carouselHeight,
        behavior: 'smooth'
    });
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1300);
});
document.addEventListener("DOMContentLoaded", function() {
    // Animación de entrada al cargar la página
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach((element) => {
        element.classList.add('animate__fadeInUp');
    });
});
