
//  MOBILE NAV TOGGLE

const navbar = document.querySelector("[mobile-nav]");
const navToggler = document.querySelector("[nav-toggle-button]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);




// active header when window scrolled to 50px


const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);