document.addEventListener('DOMContentLoaded', () => {
    const loadingMessage = document.getElementById('loading-message');
    const button = document.querySelector('.start-button');

    if (loadingMessage && button) {
        button.addEventListener('click', () => {
            loadingMessage.innerText = "Calculating the quickest route through NYC traffic... 🚖";

            setTimeout(() => {
                window.location.href = "map.html";
            }, 5000); 
        });
    }
});
