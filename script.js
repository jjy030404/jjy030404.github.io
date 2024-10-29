document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.interactive-area').forEach(area => {
        area.addEventListener('click', (event) => {
            const link = event.target.dataset.link;
            if (link) {
                window.location.href = link;
            } else {
                alert(`You selected ${event.target.dataset.location}`);
            }
        });
    });
});
