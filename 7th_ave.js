const galleryImages = document.querySelectorAll('.gallery-image');
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

    const offset = -currentImageIndex * 100;
    document.querySelector('.image-gallery').style.transform = `translateX(${offset}%)`;
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
