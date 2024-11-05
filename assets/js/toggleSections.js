function toggleSection(sectionId) {
    // Hide all sections first
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';

    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
