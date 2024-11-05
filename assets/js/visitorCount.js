function updateVisitCount() {
    const today = new Date().toDateString(); // Get today’s date as a string
    const lastVisitDate = localStorage.getItem('lastVisitDate');
    let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

    if (lastVisitDate !== today) {
        // Reset the count if it's a new day
        visitCount = 0;
        localStorage.setItem('lastVisitDate', today);
    }

    // Increment visit count and store it
    visitCount++;
    localStorage.setItem('visitCount', visitCount);

    // Display the visit count
    document.getElementById('visitor-count').innerText = `Today's visit number: ${visitCount}`;
}

// Call the function to update and display the visit count
updateVisitCount();
