const hollywoodIcons = document.querySelectorAll('.icon-hollywood');
const japanIcons = document.querySelectorAll('.icon-japan');

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

hollywoodIcons.forEach(icon => observer.observe(icon));
japanIcons.forEach(icon => observer.observe(icon));
