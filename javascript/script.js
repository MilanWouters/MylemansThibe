// Scroll-effecten toepassen wanneer elementen in beeld komen
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.fade-in, .fade-in-delay, .slide-up, .zoom-in')
    .forEach(el => observer.observe(el));


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".fade-in, .fade-in-delay, .slide-up, .zoom-in").forEach(el => {
        observer.observe(el);
    });
});