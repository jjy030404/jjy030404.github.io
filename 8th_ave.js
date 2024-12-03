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

let spidermanCaught = false;

document.getElementById("spiderman").addEventListener("click", () => {
    if (!spidermanCaught) {
        spidermanCaught = true;
        const videoContainer = document.querySelector(".video-container");
        if (videoContainer) {
            videoContainer.style.display = "block";
        }
        const videos = document.querySelectorAll(".video-player");
        if (videos.length > 0) {
            videos[0].play();
        }
        alert("You caught Spider-Man! Enjoy the videos.");
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    if (slides[currentSlide]) {
        slides[currentSlide].classList.remove("active");
    }
    currentSlide = (currentSlide + 1) % slides.length;
    if (slides[currentSlide]) {
        slides[currentSlide].classList.add("active");
    }
}

setInterval(showNextSlide, 5000);
