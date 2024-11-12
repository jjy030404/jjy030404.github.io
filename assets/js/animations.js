function startJourney() {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.innerText = "Calculating the quickest route through NYC traffic... 🚖";
    setTimeout(() => {
        window.location.href = "map.html";
    }, 2000);
}
