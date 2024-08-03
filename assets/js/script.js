import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

document.addEventListener('DOMContentLoaded', function () {

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    const mynav = document.getElementById('mynav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            mynav.classList.add('bg-info');
        } else {
            mynav.classList.remove('bg-info');
        }
    });

    mynav.addEventListener('mouseover', function () {
        mynav.classList.add('bg-info');
    });

    mynav.addEventListener('mouseout', function () {
        if (window.scrollY === 0) {
            mynav.classList.remove('bg-info');
        }
    });

});
