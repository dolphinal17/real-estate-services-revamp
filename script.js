// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-links");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// black background when scrolled
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// modal 
function openModal() {
    document.getElementById('popup').style.display = 'block';
  }

  // Close the modal when clicking outside of it or on close button
  window.onclick = function(event) {
    var modal = document.getElementById('popup');
    if (event.target == modal || event.target.closest(".popup-close") || event.target.closest("#closemodal")) {
      modal.style.display = "none";
    }
  }