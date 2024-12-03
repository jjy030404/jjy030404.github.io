const audio = document.getElementById('park-audio');
let scrollCount = 0;
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if ((currentScrollY > lastScrollY && scrollCount % 2 === 0) ||
        (currentScrollY < lastScrollY && scrollCount % 2 !== 0)) {
        scrollCount++;
    }

    lastScrollY = currentScrollY;

    if (scrollCount >= 10) { 
        audio.play();
        scrollCount = 0;
    }
});
