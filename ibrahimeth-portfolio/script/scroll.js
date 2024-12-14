const text = document.querySelector('.title-text');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY; // Sayfanın yukarıdan kaydırılma mesafesi
  const windowHeight = window.innerHeight * .7; // Pencere yüksekliği
  const documentHeight = document.body.scrollHeight ; // Sayfa toplam yüksekliği
  const scrollRatio = scrollTop / (documentHeight - windowHeight);
  const horizontalPosition = scrollRatio * 100;
  text.style.left = `${horizontalPosition}%`;
});


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
