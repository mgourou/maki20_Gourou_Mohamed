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

// Sélectionnez toutes les sections
let mainSections = document.querySelectorAll(".main_products section div div");

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
    let scrollPosition = section.offsetTop - 200; // Soustrayez 100 pixels
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    });
  });
});

// Gérez le défilement de la page
window.addEventListener("scroll", () => {
  // Obtenez la position actuelle de la fenêtre
  let scrollPosition = window.scrollY;

  // Parcourez toutes les sections
  mainSections.forEach(section => {
    // Vérifiez si la section est actuellement visible dans la fenêtre du navigateur
    if (
      scrollPosition >= section.offsetTop - 200 && // Ajustez la valeur (200) selon vos besoins
      scrollPosition < section.offsetTop + section.offsetHeight - 200
    ) {
      // Trouvez le lien correspondant dans la barre de navigation
      let link = document.querySelector(`.nav_side ul li a[href="#${section.id}"]`);
      
      // Retirez la classe "current" de tous les liens
      mainNavLinks.forEach(navLink => {
        navLink.classList.remove("current");
      });

      // Ajoutez la classe "current" au lien correspondant
      link.classList.add("current");
    }
  });
});




// Go to Top
window.addEventListener('scroll', function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;

  let goTopButton = document.querySelector('.go-top');
  
  if (scrolled > 300) {
    goTopButton.classList.add('see');
  } else {
    goTopButton.classList.remove('see');
  }
});

// Click Event
let goTopButton = document.querySelector('.go-top');
goTopButton.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// document.onreadystatechange = function () {
//   if (document.readyState !== "complete") {
//       document.querySelector(
//           "body").style.visibility = "hidden";
//       document.querySelector(
//           "#loader").style.visibility = "visible";
//   } else {
//       document.querySelector(
//           "#loader").style.display = "none";
//       document.querySelector(
//           "body").style.visibility = "visible";
//   }
// };