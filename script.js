document.addEventListener("mousemove", (event) => {
    const scrollThreshold = 100; // Distance from bottom in pixels to start scrolling
    const scrollSpeed = 5; // Adjust this to control scroll speed

    if (window.innerHeight - event.clientY < scrollThreshold) {
        window.scrollBy(0, scrollSpeed);
    }
});

document.querySelectorAll('.interactive-area').forEach(area => {
    area.addEventListener('click', (event) => {
        const location = event.target.dataset.location;
        const link = event.target.dataset.link;
        
        document.querySelectorAll('.interactive-area').forEach(a => a.classList.remove('selected'));
        event.target.classList.add('selected');
        
        if (link) {
            window.location.href = link;
        } else {
            alert(`You selected ${location}`);
        }
    });
});
