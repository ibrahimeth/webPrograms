function moveInterests() {
    const aboutRow = document.getElementById("about-row-div");
    const interests = document.getElementById("Interests");

    // En dış container (örnek: page-content)
    const pageContent = document.getElementById("about");

    if (window.innerWidth <= 1630) {
        if (aboutRow.contains(interests)) {
            pageContent.appendChild(interests); // dışarı taşı
        }
    } else {
        const aboutColumn = aboutRow.querySelector(".column");
        if (!aboutColumn.contains(interests)) {
            aboutColumn.appendChild(interests); // geri içeri al
        }
    }
}

// Sayfa yüklenince ve boyut değişince çalıştır
window.addEventListener("load", moveInterests);
window.addEventListener("resize", moveInterests);