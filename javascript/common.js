// Common JavaScript for all pages

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Cookie Consent Functions
function acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    const banner = document.getElementById('cookieConsent');
    if (banner) {
        banner.classList.remove('show');
    }
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    const banner = document.getElementById('cookieConsent');
    if (banner) {
        banner.classList.remove('show');
    }
}

// Check if user has already made a choice about cookies
window.addEventListener('DOMContentLoaded', () => {
    const consent = localStorage.getItem('cookieConsent');
    const banner = document.getElementById('cookieConsent');
    if (!consent && banner) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000);
    }
});
