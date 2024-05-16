// Script para desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("banner");
    banner.classList.add("loaded");
});
// Desplazamiento suave al cargar la página
window.addEventListener('load', function() {
    // Calculamos la altura del carrusel
    var carouselHeight = document.getElementById('carouselSection').offsetTop;

    // Realizamos un desplazamiento suave hacia la altura del carrusel
    window.scrollTo({
        top: carouselHeight,
        behavior: 'smooth'
    });

    // Después de un tiempo corto, realizamos otro desplazamiento suave hacia arriba
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1300); // 1000 milisegundos = 1 segundo (puedes ajustar este valor según lo desees)
});
// Detectamos cuando las imágenes se cargan y les agregamos la clase para la animación
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.img-fluid');

    images.forEach(function(img) {
        img.onload = function() {
            img.classList.add('loaded');
        }
    });
});
// Detectamos cuando el documento se carga completamente
document.addEventListener("DOMContentLoaded", function() {
    var carousel = document.getElementById("carouselExampleIndicators");
    // Agregamos la clase 'show' para activar la animación
    carousel.classList.add("show");
});

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.hero-content h1, .hero-content h3');
    
    elements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add('loaded');
        }, index * 1700); // Retardo entre cada línea
    });
});

// Desplazamiento suave al cargar la página
window.addEventListener('load', function() {
    // Calculamos la altura del carrusel
    var carouselHeight = document.getElementById('carouselSection').offsetTop;

    // Realizamos un desplazamiento suave hacia la altura del carrusel
    window.scrollTo({
        top: carouselHeight,
        behavior: 'smooth'
    });

    // Después de un tiempo corto, realizamos otro desplazamiento suave hacia arriba
    setTimeout(function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 1300); // 1000 milisegundos = 1 segundo (puedes ajustar este valor según lo desees)
});
document.addEventListener("DOMContentLoaded", function() {
    // Ensure animations are applied once the DOM is fully loaded
    const titles = document.querySelectorAll('.animate-title');
    const texts = document.querySelectorAll('.animate-text');

    titles.forEach((title, index) => {
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 200 * index); // delay for each title
    });

    texts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 * index); // delay for each text
    });
});