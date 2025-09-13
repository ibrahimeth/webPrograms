class CertificateManager {
  constructor(trackSelector, jsonPath, leftBtnSelector, rightBtnSelector) {
    this.track = document.querySelector(trackSelector);
    this.jsonPath = jsonPath;
    this.itemWidth = 0;
    this.timeoutId = null;  // artık setTimeout kullanıyoruz
    
    this.remainTime = 2000;
    this.leftBtn = document.querySelector(leftBtnSelector);
    this.rightBtn = document.querySelector(rightBtnSelector);
  }

  async init() {
    await this.loadCertificates();
    this.startAutoSlide();   // otomatik kayma başlat
    this.setupButtons();     // butonları bağla
  }

  async loadCertificates() {
    try {
      const response = await fetch(this.jsonPath);
      const data = await response.json();
      this.renderCertificates(data);
    } catch (error) {
      console.error("JSON yüklenirken hata oluştu:", error);
    }
  }

  renderCertificates(data) {
    this.track.innerHTML = "";
    data.forEach(cert => {
      const item = document.createElement("div");
      item.className = "certificate-container row";
      item.innerHTML = `
        <div class="certificate-logo">
          <img src="${cert.logo}" />
        </div>
        <div class="inside-column">
          <p class="textS">${cert.title}</p>
          <p class="textXS">${cert.source}</p>
          <div class="inside-row">
            <p class="textS">${cert.date}</p>
            <a target="_blank" href="${cert.link}">
              <div class="project-container-share-button-text">exmine</div>
            </a>
          </div>
        </div>
      `;
      this.track.appendChild(item);
      this.mesuraItem();
    });

    
  }
  mesuraItem() {
    const firstItem = this.track.querySelector(".certificate-container");
    
    if (firstItem) {
      this.itemWidth =
        firstItem.offsetWidth +
        parseInt(getComputedStyle(firstItem).marginRight);
    }
  }
  slideRight() {
    this.track.style.transition = "transform 0.5s ease";
    this.track.style.transform = `translateX(-${this.itemWidth}px)`;

    this.track.addEventListener("transitionend", (e) => {
      if (e.propertyName !== "transform") return;
      this.track.style.transition = "none";
      this.track.appendChild(this.track.firstElementChild);
      this.track.style.transform = "translateX(0)";
    }, { once: true });
  }

  startAutoSlide() {
    this.clearAutoSlide();
    this.mesuraItem();
    this.timeoutId = setTimeout(() => {
      this.slideRight();
      this.startAutoSlide();  // her kaymadan sonra tekrar tetikle
      if (this.remainTime === 3000) 
        this.remainTime = 2000 ;
    }, this.remainTime);
  }

  clearAutoSlide() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  setupButtons() {
    if (!this.leftBtn || !this.rightBtn) return;

    this.rightBtn.addEventListener("click", () => {
      this.clearAutoSlide();
      this.slideRight();
      this.remainTime = 3000;
      this.startAutoSlide();
    });

    this.leftBtn.addEventListener("click", () => {
      this.clearAutoSlide();
      this.track.style.transition = "none";
      this.track.insertBefore(this.track.lastElementChild, this.track.firstElementChild);
      this.track.style.transform = `translateX(-${this.itemWidth}px)`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.track.style.transition = "transform 0.5s ease";
          this.track.style.transform = "translateX(0)";
        });
      });
      this.remainTime = 3000;
      this.startAutoSlide();
    });
  }
}

// Kullanım
document.addEventListener("DOMContentLoaded", () => {
  const cm = new CertificateManager(
    ".track",
    "data/certificates.json",
    "#certificate-track-btn-left",
    "#certificate-track-btn-right"
  );
  cm.init();
});
