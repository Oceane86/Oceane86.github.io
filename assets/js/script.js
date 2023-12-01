document.getElementById('burger-menu').addEventListener('click', function () {
let mobileMenu = document.getElementById('mobile-menu');
mobileMenu.classList.toggle('hidden');
let menuIcon = document.querySelector('.menu-icon');
menuIcon.innerHTML = (mobileMenu.classList.contains('hidden')) ?
    '<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>' :
    '<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
});

let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.add('active');
        } else {
            testimonial.classList.remove('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + testimonials.length) % testimonials.length;
    showSlide(currentSlide);
}

// Auto-advance every 5000 milliseconds (5 seconds)
setInterval(() => {
    changeSlide(1);
}, 5000);

let slideIndex = 1;

showSlides01(slideIndex);





function plusSlides01(n) {

    showSlides01(slideIndex += n);

}



function currentSlide01(n) {

    showSlides01(slideIndex = n);

}



function showSlides01(n) {

    var i;

    var slides = document.getElementsByClassName("mySlides01");

    var dots = document.getElementsByClassName("dot01");

    if (n > slides.length) {slideIndex = 1}    

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";  

    }

    for (i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" active", "");

    }

    slides[slideIndex-1].style.display = "block";  

    dots[slideIndex-1].className += " active";

}



