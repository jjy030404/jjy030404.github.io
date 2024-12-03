const sliderBall = document.querySelector('.slider-ball');
const body = document.body;
let isDragging = false;


sliderBall.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const sliderContainer = document.querySelector('.slider-container');
        const rect = sliderContainer.getBoundingClientRect();
        let left = e.clientX - rect.left;

    
        left = Math.max(0, Math.min(left, rect.width));
        sliderBall.style.left = `${left}px`;

      
        const tilt = ((left / rect.width) - 0.5) * 40; 
        body.style.transform = `rotate(${tilt}deg)`;
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) isDragging = false;
});
