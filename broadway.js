const galleryImages = document.querySelectorAll('.gallery-image');
let rotationAngle = 0;

galleryImages.forEach(image => {
    let clickStart = 0;

    image.addEventListener('mousedown', () => {
        clickStart = Date.now();
    });

    image.addEventListener('mouseup', () => {
        const clickDuration = Date.now() - clickStart;
        rotationAngle += clickDuration / 10;

        image.style.transform = `rotateY(${rotationAngle}deg)`;
    });
});
