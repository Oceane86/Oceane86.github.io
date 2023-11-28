ScrollReveal().reveal('.titre');


document.getElementById('burgerBtn').addEventListener('click', () => {
    document.getElementById('menuItems').classList.toggle('hidden');
});
  
// Fonctions pour le carrousel
let currentIndex = 0;
const testimonials = [
  "<em>Message d'avis 1.</em>",
  "<em>Message d'avis 2.</em>",
  "<em>Message d'avis 3.</em>"
];

const showTestimonial = (index) => {
  document.getElementById('testimonial').innerHTML = testimonials[index];
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
};

const viewAll = () => {
  // Vous pouvez mettre en œuvre la logique pour afficher tous les témoignages ici
  // par exemple, en utilisant une fenêtre modale.
};

const addTestimonial = () => {
  // Vous pouvez mettre en œuvre la logique pour ajouter un témoignage ici
  // par exemple, en utilisant un formulaire.
};



function toggleMenu() {
    var menu = document.getElementById('menuItems');
    var burgerIcon = document.querySelector('.block.w-5');

    if (!open) {
        menu.classList.remove('hidden');
        burgerIcon.classList.add('rotate-45', '-translate-y-1.5');
    } else {
        menu.classList.add('hidden');
        burgerIcon.classList.remove('rotate-45', '-translate-y-1.5');
    }

    open = !open;
}