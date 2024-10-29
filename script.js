const map = document.querySelector('.background-map');
const zoomInButton = document.getElementById('zoom-in');
const zoomOutButton = document.getElementById('zoom-out');

let scale = 1;
const scaleStep = 0.2;
const maxScale = 3; // Maximum zoom level
const minScale = 1; // Minimum zoom level

zoomInButton.addEventListener('click', () => {
    if (scale < maxScale) {
        scale += scaleStep;
        map.style.transform = `scale(${scale})`;
    }
});

zoomOutButton.addEventListener('click', () => {
    if (scale > minScale) {
        scale -= scaleStep;
        map.style.transform = `scale(${scale})`;
    }
});

document.querySelectorAll('.interactive-area').forEach(area => {
    area.addEventListener('click', (event) => {
        const link = event.target.dataset.link;
        document.querySelectorAll('.interactive-area').forEach(a => a.classList.remove('selected'));
        event.target.classList.add('selected');
        
        if (link) {
            window.location.href = link;
        }
    });
});
