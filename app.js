button = document.querySelector(".buttone");
nav = document.querySelector(".nav-menu");
let changer = 0;
imgElement = document.querySelector(".button-img");
fullnave = document.querySelector(".header-nav-par");
navpar = document.querySelector(".navbar");
imgbutton = document.querySelector(".button-img");
const navbar = document.querySelector(".navbar"); // Replace '.navbar' with the appropriate selector for your navbar
const shadowOverlay = document.getElementById("shadow-overlay");

shadowOverlay.addEventListener("click", function () {
  if (changer === 1) {
    changer--;
    nav.classList.add("close");
    nav.classList.remove("open");
    shadowOverlay.style.display = "none";
    fullnave.classList.remove("header-nav-par-open");
    imgElement.src = "assets/images/icon-menu.svg";
  } else if (changer === 0) {
    changer++;
    shadowOverlay.style.display = "block";
    navpar.style.opacity = 1;
    imgElement.src = "assets/images/icon-menu-close.svg";
    fullnave.classList.add("header-nav-par-open");
    imgbutton.style.transition = "3s";
    nav.classList.remove("close");
    nav.classList.add("open");
  }
});
button.addEventListener("click", function () {
  if (changer === 0) {
    shadowOverlay.style.display = "block";
    navpar.style.opacity = 1;
    imgElement.src = "assets/images/icon-menu-close.svg";
    fullnave.classList.add("header-nav-par-open");
    imgbutton.style.transition = "3s";
    nav.classList.remove("close");
    nav.classList.add("open");
    changer++;
  } else if (changer === 1) {
    shadowOverlay.style.display = "none";
    navpar.style.opacity = 0;
    imgElement.src = "assets/images/icon-menu.svg";
    fullnave.classList.remove("header-nav-par-open");
    imgbutton.style.transition = "3s";
    nav.classList.add("close");
    nav.classList.remove("open");
    changer--;
  }
});
