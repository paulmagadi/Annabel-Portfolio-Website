
//  MOBILE NAV TOGGLE

const navbar = document.querySelector(".mobile-nav");
const navToggler = document.querySelector(".nav-toggle-button");

navToggler.addEventListener('click', () => {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    navToggler.innerHTML = '<i class="fa-solid fa-x"></i>';
  } else {
    navToggler.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});