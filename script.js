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
