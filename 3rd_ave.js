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
    currentX = Math.max(-250, Math.min(250, deltaX));

    sliderBall.style.transform = `translateX(${currentX}px)`;
    body.style.transform = `rotate(${currentX * 0.05}deg)`;

    if (Math.abs(currentX) >= 240) {
        sliderBall.style.transform = `translateX(${currentX}px) scale(1.1)`;
        body.style.transition = 'transform 0.2s ease-out';
    }
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;

    isDragging = false;
    sliderBall.style.transition = 'transform 0.5s cubic-bezier(0.25, 1.5, 0.5, 1)';
    sliderBall.style.transform = `translateX(${currentX}px)`;
    body.style.transition = 'transform 0.3s ease-out';

    if (Math.abs(currentX) >= 240) {
        sliderBall.style.transform = `translateX(${Math.sign(currentX) * 240}px)`;
    }
});
