const navbar = document.getElementById('navbarjs');


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { // Verander de waarde (100) naar de gewenste scrollpositie
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
