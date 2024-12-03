const galleryImages = document.querySelectorAll('.gallery-image');
let currentImage = 0;

// 갤러리 이미지 전환
function showImage(index) {
    galleryImages.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
            image.classList.add('active');
        }
    });
}

// 이미지 클릭으로 갤러리 탐색
galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImage = index;
        showImage(currentImage);
    });
});

// 초기 이미지 설정
showImage(currentImage);
