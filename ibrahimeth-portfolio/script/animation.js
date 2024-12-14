let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    }, 4000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 5000);
  }
}

function getRandomPun() {
  const puns = [
    "Computer Engineer",
    "Android Developer",
    "Backend Developer",
    "Frontend Developer",
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);


particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});




document.querySelector(".image-container").addEventListener("mousemove", function (e) {
    const image = this.querySelector(".tilt-image");
    const bounds = this.getBoundingClientRect(); // Container'ın konumunu al
    const x = e.clientX - bounds.left; // Farenin x pozisyonu (container içinde)
    const y = e.clientY - bounds.top;  // Farenin y pozisyonu (container içinde)
  
    // X ve Y pozisyonuna göre eğilme oranlarını ayarla
    const tiltX = ((x / bounds.width) - 0.5) * 20; // Yatay eksende eğim
    const tiltY = ((y / bounds.height) - 0.5) * 20; // Dikey eksende eğim
  
    // Transform özelliğiyle eğim uygula
    image.style.transform = `rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
  });
  
  // Fareyi container'dan çekince resmi sıfırla
  document.querySelector(".image-container").addEventListener("mouseleave", function () {
    const image = this.querySelector(".tilt-image");
    image.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
  
