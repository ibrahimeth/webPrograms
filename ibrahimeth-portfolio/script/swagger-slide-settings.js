const track = document.querySelector(".track");
const item = track.querySelector(".certificate-container");
const itemWidth = item.offsetWidth + parseInt(getComputedStyle(item).marginRight); // margin dahil genişlik

function slide() {
  // 1. sola kaydır (görünecek animasyon)
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${itemWidth}px)`;

  track.addEventListener("transitionend", function handler(e) {
    if (e.propertyName !== "transform") return;

    // 2. animasyon bittiğinde DOM manipülasyonu yap
    track.style.transition = "none"; // animasyonu kapat
    track.appendChild(track.firstElementChild); // baştaki itemi sona taşı

    // 3. translateX(-itemWidth) konumunu koruyup anında 0'a al
    track.style.transform = "translateX(0)";

    track.removeEventListener("transitionend", handler);
  });
}

setInterval(slide, 3000);