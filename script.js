document.querySelectorAll('.interactive-area').forEach(area => {
    area.addEventListener('click', (event) => {
        const location = event.target.dataset.location;
        alert(`You clicked on ${location}!`);
        });
});
