const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', showMenu)

function showMenu(e) {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('active');
}