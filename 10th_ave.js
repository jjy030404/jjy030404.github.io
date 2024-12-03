const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.add('popped');
        setTimeout(() => image.remove(), 600);
    });
});
