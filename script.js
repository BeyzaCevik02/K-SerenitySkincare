/*const navbar = document.getElementById('navbarjs');


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});*/
//product
function prevImage() {
  //neemt active img
  const activeIndex = document.querySelector('.image.active').getAttribute('data-index');
  //verwijdert die active
  document.querySelector('.image.active').classList.remove('active');

  const images = document.querySelectorAll('.image');
  //neemt data index - 1 om naar vorige te gaan, + aantal images % aantal images om niet buiten de index te gaan
  //bv 2 - 1 = 1 + 3 = 4 = 4 index hebben we  niet dus % lenght
  const prevIndex = (parseInt(activeIndex) - 1 + images.length) % images.length;
  images[prevIndex].classList.add('active');
}

function nextImage() {
  const activeIndex = document.querySelector('.image.active').getAttribute('data-index');
  document.querySelector('.image.active').classList.remove('active');

  const images = document.querySelectorAll('.image');
  const nextIndex = (parseInt(activeIndex) + 1) % images.length;
  images[nextIndex].classList.add('active');
}
document.querySelector('.image').classList.add('active');

//login modal 
function openModal() {
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function sendResetEmail() {
  const resetEmail = document.getElementById('reset-email').value;
  alert('Resetlink verzonden naar het opgegeven e-mailadres: ' + resetEmail);
  document.getElementById('modal').style.display = 'none';
}

