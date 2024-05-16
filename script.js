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
    }, 1000); // 1000 milisegundos = 1 segundo (puedes ajustar este valor según lo desees)
});