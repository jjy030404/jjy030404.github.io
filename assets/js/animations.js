function startJourney() {
    // Display a humorous loading message before redirecting
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.innerText = "Calculating the quickest route through NYC traffic... 🚖";

    // Redirect to the map page after a short delay
    setTimeout(() => {
        window.location.href = "map.html"; // Replace with your main interactive map page
    }, 2000); // 2-second delay
}
