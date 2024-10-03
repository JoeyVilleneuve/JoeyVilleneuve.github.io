const navbar_hamburger = document.querySelector('.navbar_hamburger')
const navbar_links = document.querySelector('.navbar_links')

// Listener event to open hamburger menu when clicked
navbar_hamburger.addEventListener('click', function() {
    navbar_hamburger.classList.toggle('is-active');
    navbar_links.classList.toggle('active');
})