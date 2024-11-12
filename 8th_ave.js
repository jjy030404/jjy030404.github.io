function moveSpiderMan() {
    const spiderman = document.getElementById("spiderman");
    const maxX = window.innerWidth - spiderman.offsetWidth;
    const maxY = window.innerHeight - spiderman.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    spiderman.style.left = `${randomX}px`;
    spiderman.style.top = `${randomY}px`;
}

setInterval(moveSpiderMan, 2000);

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 5000);
