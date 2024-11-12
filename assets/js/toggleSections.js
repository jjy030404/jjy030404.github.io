const toggle = document.querySelector('.toggle');
const dropdown = document.querySelector('.dropdown');

toggle.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
});

toggle.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
});
