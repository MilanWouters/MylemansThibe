// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;

    if (hamburger && navLinks) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', String(hamburger.classList.contains('active')));
            hamburger.setAttribute('aria-label', hamburger.classList.contains('active') ? 'Menu sluiten' : 'Menu openen');
            navLinks.classList.toggle('active');
            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }
            // Prevent body scroll when menu is open
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && hamburger.classList.contains('active')) {
                hamburger.click();
                hamburger.focus();
            }
        });

        // Close menu when clicking overlay
        if (navOverlay) {
            navOverlay.addEventListener('click', function() {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Menu openen');
                navLinks.classList.remove('active');
                navOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        }

        // Close menu when clicking a nav link
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Menu openen');
                navLinks.classList.remove('active');
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
                body.style.overflow = '';
            });
        });

        // Close menu on window resize (if resizing to desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 980) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.setAttribute('aria-label', 'Menu openen');
                navLinks.classList.remove('active');
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
                body.style.overflow = '';
            }
        });
    }
});
