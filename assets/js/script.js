import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

document.addEventListener('DOMContentLoaded', function () {


    // ##############################################################
    // #################### Bootstrap ###############################
    // ##############################################################



    // tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = Array.from(tooltipTriggerList).map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // carousel
    const myCarousel = document.querySelector('#carouselExampleCaptions')
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,
        ride: 'carousel'
    })



    // modal
    var myModal = document.getElementById("exampleModal")
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    })




    // ##############################################################
    // ##############################################################
    // ##############################################################



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


    // btn enviar


    const btnenviar = document.getElementById('botonenviar')
    btnenviar.addEventListener("click",()=>{
        alert('Mensaje enviado');        
    })

});
