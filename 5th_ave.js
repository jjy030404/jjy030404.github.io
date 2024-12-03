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

const galleryImages = document.querySelectorAll('.avenue-image');
const prevButton = document.getElementById('prev-gallery');
const nextButton = document.getElementById('next-gallery');
let currentImageIndex = 0;

function updateGallery() {
    galleryImages.forEach((image, index) => {
        image.classList.remove('active');
        if (index === currentImageIndex) {
            image.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? galleryImages.length - 1 : currentImageIndex - 1;
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === galleryImages.length - 1) ? 0 : currentImageIndex + 1;
    updateGallery();
});

updateGallery();
