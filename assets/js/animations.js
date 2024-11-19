document.addEventListener('DOMContentLoaded', () => {
    const loadingMessage = document.getElementById('loading-message');
    const button = document.querySelector('.start-button');

    if (loadingMessage && button) {
        button.addEventListener('click', () => {
            loadingMessage.innerText = "Your journey through NYC begins... 🚕";

            setTimeout(() => {
                window.location.href = "map.html";
            }, 2000);
        });
    } else {
        console.error("Required elements not found for animations.js");
    }
});
