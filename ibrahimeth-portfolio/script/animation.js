let currentIndex = 0; 
let typed = "";
let index = 0;

const element = document.querySelector(".typity"); 
const puns = [
  "Computer Engineer",
  "Android Developer",
  "Backend Developer",
  "Frontend Developer",
];

function startType() {
  const pun = puns[currentIndex];

  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(startType, 50);
  } else {
    setTimeout(function () {
      element.classList.add("highlight");
    }, 4000);

    setTimeout(function () {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;

      currentIndex = (currentIndex + 1) % puns.length; 
      index = 0; 
      startType();
    }, 5000);
  }
}

startType();



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



(function() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  let isScrolling = false;

  window.addEventListener("scroll", () => {
      if (!isScrolling) {
          window.requestAnimationFrame(() => {
              let current = "";

              sections.forEach((section) => {
                  const sectionTop = section.offsetTop - 60;
                  const sectionHeight = section.clientHeight;
                  if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                      current = section.getAttribute("id");

                      console.log(current);
                      if(current == "about" || current == "education" || current == "slider-type"){
                        const gifElement = document.getElementById('win-gif');
                        const scrollPosition = window.scrollY; 
                      
                        const rotationAngle = scrollPosition / 3  // 360 dereceden fazla olmasın
                      
                        
                        gifElement.style.transform = `rotate(${rotationAngle}deg)`;
                      
                      }
                  }
              });

              navLinks.forEach((link) => {
                  link.classList.remove("active");
                  if (link.getAttribute("href") === `#${current}`) {
                      link.classList.add("active");
                  }
              });

          });
      }
  });
})();


