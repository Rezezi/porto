// About section toggling on click
document.getElementById('about-link').addEventListener('click', function (e) {
    e.preventDefault();
    const aboutSection = document.getElementById('about-section');
    aboutSection.classList.toggle('hidden'); // Show or hide the section
    aboutSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
});
