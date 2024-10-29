document.addEventListener("mousemove", (event) => {
    const scrollThreshold = 100; // Distance from bottom in pixels to start scrolling
    const scrollSpeed = 5; // Adjust this to control scroll speed

    // If mouse is near the bottom of the window, scroll down
    if (window.innerHeight - event.clientY < scrollThreshold) {
        window.scrollBy(0, scrollSpeed);
    }
});

document.querySelectorAll('.interactive-area').forEach(area => {
    area.addEventListener('click', (event) => {
        const location = event.target.dataset.location;
        const link = event.target.dataset.link;
        
        // Remove 'selected' class from all areas before adding to the clicked one
        document.querySelectorAll('.interactive-area').forEach(a => a.classList.remove('selected'));
        
        // Add 'selected' class to the clicked area
        event.target.classList.add('selected');
        
        // Redirect to the corresponding HTML page
        if (link) {
            window.location.href = link;
        } else {
            alert(`You selected ${location}`);
        }
    });
});
