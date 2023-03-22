const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const cards = document.querySelectorAll(".work-card");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Reset the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Reset the menu state
    showMenu = false;
  }
}

// Get the modal element
var modal = document.getElementById("contact-modal");

// Get the button that opens the modal
var btn = document.getElementById("contact-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.classList.add("show");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.classList.remove("show");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
};
