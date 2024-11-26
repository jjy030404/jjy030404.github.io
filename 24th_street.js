const galleryImages = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev-gallery');
const nextButton = document.getElementById('next-gallery');
let currentImage = 0;

// Show the selected image
function showImage(index) {
    galleryImages.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

// Event listeners for gallery controls
prevButton.addEventListener('click', () => {
    currentImage = (currentImage === 0) ? galleryImages.length - 1 : currentImage - 1;
    showImage(currentImage);
});

nextButton.addEventListener('click', () => {
    currentImage = (currentImage === galleryImages.length - 1) ? 0 : currentImage + 1;
    showImage(currentImage);
});

// Add shaking effect when video is played
const video = document.getElementById('main-video');
video.addEventListener('play', () => {
    document.body.classList.add('shake');
});
video.addEventListener('pause', () => {
    document.body.classList.remove('shake');
});
