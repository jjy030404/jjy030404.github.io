let timer;

function startTimer() {
    timer = setTimeout(() => {
        window.location.href = "captcha.html";
    }, 15000); 
}

function resetTimer() {
    clearTimeout(timer);
    startTimer(); 
}

document.addEventListener('DOMContentLoaded', () => {
    startTimer();
    document.addEventListener('click', resetTimer); 
});
