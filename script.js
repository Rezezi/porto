document.addEventListener('DOMContentLoaded', function () {
    // Animasi Fade-in pada Hero Text
    const heroText = document.querySelector('.hero-text');
    heroText.classList.add('fade-in');

    // Smooth scroll untuk Home link
    document.querySelector('a[href="#"]').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Smooth scroll untuk link About dan Hire Me
    document.querySelectorAll('a[href="#about-section"]').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const aboutSection = document.getElementById('about-section');
            window.scrollTo({ top: aboutSection.offsetTop, behavior: 'smooth' });
        });
    });

    // Fade-in effect untuk setiap elemen saat di-scroll ke view
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Berhenti mengamati setelah terlihat
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => observer.observe(el));

    // Hover effects untuk link sosial media
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('spin');
        });
        icon.addEventListener('mouseout', () => {
            icon.classList.remove('spin');
        });
    });

    // Hero image zoom-in effect
    const heroImage = document.querySelector('.hero-image');
    heroImage.addEventListener('mouseover', () => {
        heroImage.classList.add('zoom-in');
    });
    heroImage.addEventListener('mouseout', () => {
        heroImage.classList.remove('zoom-in');
    });
});
