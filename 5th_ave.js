let currentImage = 0;
const images = document.querySelectorAll('.gallery-image');

function showNextImage() {
    images[currentImage].classList.remove('active');
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].classList.add('active');
}

setInterval(showNextImage, 5000);

const button = document.getElementById("runaway-button");
let runawayCount = 0;

button.addEventListener("mouseover", () => {
    if (runawayCount < 3) {
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.position = "absolute";
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        runawayCount++;
    }
});
