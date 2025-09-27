const lines = document.querySelectorAll('.gradation-line-gold');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        } else {
        entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5
});

lines.forEach(line => observer.observe(line));
