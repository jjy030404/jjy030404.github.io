function startJourney() {
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.innerText = "Calculating the quickest route through NYC traffic... 🚖";

    // Retrieve the current click count from local storage or initialize at 0
    let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
    clickCount++;

    // Store the updated click count back in local storage
    localStorage.setItem('clickCount', clickCount);

    // Update the display to show the total clicks for this user
    document.getElementById('click-count').innerText = `Button clicked ${clickCount} times`;

    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = "map.html";
    }, 2000);
}

// Display the current count when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const clickCount = localStorage.getItem('clickCount') || 0;
    document.getElementById('click-count').innerText = `Button clicked ${clickCount} times`;
});
