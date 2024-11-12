function startJourney() {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.innerText = "Calculating the quickest route through NYC traffic... 🚖";

    let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
    clickCount++;

    localStorage.setItem('clickCount', clickCount);

    document.getElementById('visitor-count').innerText = `Button clicked ${clickCount} times`;

    setTimeout(() => {
        window.location.href = "map.html";
    }, 2000);
}
