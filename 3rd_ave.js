const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');
const sliderBall = document.querySelector('.slider-ball');
let currentSlide = 0;

// 슬라이드 전환
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.opacity = i === index ? '1' : '0'; // 활성화된 슬라이드만 보이게
        slide.style.transform = i === index ? 'translateX(0)' : 'translateX(100%)';
    });
}

// 슬라이더 공 이동 및 기울기 효과
sliderBall.addEventListener('mousedown', (e) => {
    const sliderLine = e.target.parentElement;
    const sliderLineRect = sliderLine.getBoundingClientRect();

    function onMouseMove(event) {
        const x = Math.min(Math.max(event.clientX - sliderLineRect.left, 0), sliderLineRect.width);
        const percentage = (x / sliderLineRect.width - 0.5) * 2;
        sliderBall.style.left = `${x}px`;
        document.body.style.transform = `rotate(${percentage * 10}deg)`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// 이전/다음 버튼 클릭 이벤트
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
});

// 초기 슬라이드 설정
showSlide(currentSlide);
