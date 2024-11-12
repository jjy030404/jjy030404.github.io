function toggleSection(sectionId) {
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
