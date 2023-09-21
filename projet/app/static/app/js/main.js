// Sélectionnez la navbar
const navbar = document.querySelector('.navbar');

// Ajoutez un écouteur d'événement sur le scroll de la page
window.addEventListener('scroll', () => {
  // Obtenez la position verticale actuelle du défilement de la page
  const scrollY = window.scrollY;
  navbar.style.transition = "0.5s";

  // Définissez une valeur pour l'opacité en fonction de la position de défilement
  const opacity = scrollY > 100 ? 0.8 : 1; // Vous pouvez ajuster la valeur (100) selon vos préférences

  // Appliquez l'opacité à la navbar
  navbar.style.opacity = opacity;
});

// Scroll avec style
let reveal = () => {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active_anim");
      } else {
          reveals[i].classList.remove("active_anim");
      }
  }
}

window.addEventListener("scroll", reveal);


// Sélectionnez tous les liens de navigation
let mainNavLinks = document.querySelectorAll(".nav_side ul li a");

// Gérez le clic sur les liens de navigation
mainNavLinks.forEach(link => {
  link.addEventListener("click", event => {
    // Empêchez le comportement par défaut du lien
    event.preventDefault();

    // Retirez la classe "current" de tous les liens
    mainNavLinks.forEach(navLink => {
      navLink.classList.remove("current");
    });

    // Ajoutez la classe "current" au lien actuellement cliqué
    link.classList.add("current");

    // Obtenez la section correspondante et faites défiler jusqu'à elle
    let section = document.querySelector(link.hash);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  });
});