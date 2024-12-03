// Move Spider-Man randomly around the screen
function moveSpiderMan() {
    const spiderman = document.getElementById("spiderman");
    const maxX = window.innerWidth - spiderman.offsetWidth;
    const maxY = window.innerHeight - spiderman.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    spiderman.style.left = `${randomX}px`;
    spiderman.style.top = `${randomY}px`;
}

// Set Spider-Man movement interval
setInterval(moveSpiderMan, 2000);

// Handle Spider-Man click event
let spidermanCaught = false;

document.getElementById("spiderman").addEventListener("click", () => {
    if (!spidermanCaught) {
        spidermanCaught = true;
        document.querySelector(".video-container").style.display = "block";
        const videos = document.querySelectorAll(".video-player");
        if (videos.length > 0) {
            videos[0].play();
        }
        alert("You caught Spider-Man! Enjoy the video.");
    }
});

// Video queue system for multiple videos
const videos = document.querySelectorAll(".video-player");
videos.forEach((video, index) => {
    video.addEventListener("ended", () => {
        if (index + 1 < videos.length) {
            videos[index + 1].play();
        }
    });
});

// Slide functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

// Set slide interval
setInterval(showNextSlide, 5000);
