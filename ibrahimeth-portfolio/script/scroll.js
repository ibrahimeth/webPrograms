// script.js

// Scroll ile Header'ın Belirginleşmesi
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }



});

// Hamburger Menü için
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});



const boxes = document.querySelectorAll('.about-box');

function checkBoxes() {
    const triggerBottom = window.innerHeight * 1; // Ekranın %80 yüksekliği

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show'); 
        } else {
            //ox.classList.remove('show'); 
        }
    });
}
window.addEventListener('scroll', checkBoxes);
window.addEventListener('load', checkBoxes);


const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { 
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth' 
  });
});

