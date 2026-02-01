/* -----------------------------------------------------------
   MOBILE NAVIGATION
----------------------------------------------------------- */

const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

if (mobileToggle && navLinks) {
    // Open/close menu
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking a nav link
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}

/* -----------------------------------------------------------
   SMOOTH SCROLL (ONLY for in‑page anchors, NOT nav links)
----------------------------------------------------------- */

document.querySelectorAll('a[href^="#"]:not(.nav-link)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* -----------------------------------------------------------
   CV DOWNLOAD BUTTONS
----------------------------------------------------------- */

const downloadButtons = document.querySelectorAll('#downloadCV, #downloadCVContact');

downloadButtons.forEach(button => {
    button?.addEventListener('click', (e) => {
        e.preventDefault();

        const link = document.createElement('a');
        link.href = 'documents/alvin-ugwu-cv.pdf';
        link.download = 'Alvin_Ugwu_CV.pdf';
        link.click();
    });
});

/* -----------------------------------------------------------
   NAVBAR SCROLL SHADOW
----------------------------------------------------------- */

const navbar = document.getElementById('navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow =
            window.pageYOffset > 0
                ? '0 2px 20px rgba(0, 0, 0, 0.3)'
                : 'none';
    });
}

/* -----------------------------------------------------------
   ACTIVE NAV LINK HIGHLIGHT
----------------------------------------------------------- */

const currentPage = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

/* -----------------------------------------------------------
   INTERSECTION OBSERVER (Fade‑in animations)
----------------------------------------------------------- */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll(
    '.research-card, .stat-card, .interest-card, .timeline-item, .research-list-item, .interest-detail-card, .quick-link-card'
).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

/* -----------------------------------------------------------
   CONSOLE GREETING
----------------------------------------------------------- */

console.log('%c👋 Hello! Thanks for checking out the code!', 'color: #4A90E2; font-size: 16px; font-weight: bold;');
console.log('%cThis portfolio was built with semantic HTML, CSS, and vanilla JavaScript.', 'color: #78909C; font-size: 14px;');
console.log('%cInterested in collaboration? Reach out at augwu@uwo.ca', 'color: #10B981; font-size: 14px;');
