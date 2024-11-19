const sliderBall = document.querySelector('.slider-ball');
const body = document.body;

let isDragging = false;
let initialX = 0;
let currentX = 0;

sliderBall.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX;
    sliderBall.style.transition = 'none';
    body.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - initialX;
    currentX = Math.max(-150, Math.min(150, deltaX));

    sliderBall.style.transform = `translateX(${currentX}px)`;
    body.style.transform = `rotate(${currentX * 0.1}deg)`;

    if (Math.abs(currentX) === 150) {
        sliderBall.style.transition = 'transform 0.3s ease-out';
        sliderBall.style.transform += ' scale(1.2)';
    }
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;

    isDragging = false;
    sliderBall.style.transition = 'transform 0.3s ease-out';
    sliderBall.style.transform = 'translateX(0px)';
    body.style.transition = 'transform 0.3s ease-out';
    body.style.transform = 'rotate(0deg)';
});
