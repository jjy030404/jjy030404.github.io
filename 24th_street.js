const video = document.getElementById('main-video');
const overlay = document.querySelector('.video-overlay');


overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    video.play();
});

const galleryImages = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev-gallery');
const nextButton = document.getElementById('next-gallery');
let currentImage = 0;


function showImage(index) {
    galleryImages.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentImage = (currentImage === 0) ? galleryImages.length - 1 : currentImage - 1;
    showImage(currentImage);
});

nextButton.addEventListener('click', () => {
    currentImage = (currentImage === galleryImages.length - 1) ? 0 : currentImage + 1;
    showImage(currentImage);
});


showImage(currentImage);
