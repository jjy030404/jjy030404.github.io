document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const target = document.querySelector(item.dataset.target);
        if (target) {
            target.classList.toggle('active');
        }
    });
});
