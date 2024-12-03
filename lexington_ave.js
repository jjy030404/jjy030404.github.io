const galleryImages = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev-gallery');
const nextButton = document.getElementById('next-gallery');
const audio = document.getElementById('audio');
let currentSlide = 0;
let isPlaying = false;

function updateGallery() {
    galleryImages.forEach((image, index) => {
        image.parentElement.classList.remove('active');
        if (index === currentSlide) {
            image.parentElement.classList.add('active');
        }
    });
}

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
        } else {
            audio.pause();
            isPlaying = false;
        }
    });
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? galleryImages.length - 1 : currentSlide - 1;
    updateGallery();
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === galleryImages.length - 1) ? 0 : currentSlide + 1;
    updateGallery();
});

updateGallery();
