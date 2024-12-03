const mediaGrid = document.querySelector('.media-grid');
const mediaItems = Array.from(document.querySelectorAll('.media'));

function shuffleMedia() {
    const shuffled = mediaItems.sort(() => Math.random() - 0.5);
    mediaGrid.innerHTML = '';
    shuffled.forEach(item => mediaGrid.appendChild(item));
}

setInterval(shuffleMedia, 3000);
