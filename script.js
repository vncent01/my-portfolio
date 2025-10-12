// --- Sidebar & Theme Logic (Improved for All Pages) ---

// Element selection
const menuToggle = document.getElementById('menu-toggle');
const body = document.body;
const themeToggle = document.getElementById('toggle-theme');
const mainContentWrapper = document.querySelector('.main-content-wrapper');
const navLinks = document.querySelectorAll('.nav-links a');

const SIDEBAR_OPEN_CLASS = 'sidebar-open';
const DARK_THEME_CLASS = 'dark-theme';

// Typing Effect setup (optional — only runs if element exists)
const typingElement = document.getElementById('typing-role');
const roles = ["Front-End Developer", "Information Systems Graduate", "SAP FICO Analyst", "Aspiring AI Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    if (!typingElement) return; // Prevent errors on pages without typing text
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
}

// Sidebar functions
function openSidebar() {
    body.classList.add(SIDEBAR_OPEN_CLASS);
}

function closeSidebar() {
    body.classList.remove(SIDEBAR_OPEN_CLASS);
}

// Sidebar toggle (only if button exists)
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        body.classList.contains(SIDEBAR_OPEN_CLASS) ? closeSidebar() : openSidebar();
    });
}

const downloadCVBtn = document.getElementById('download-cv');

if (downloadCVBtn) {
    downloadCVBtn.addEventListener('click', () => {
        // Replace this path with your actual CV file location
        window.open('VINCENT_SARCILLA.pdf', '_blank');
    });
}


// Close sidebar when clicking main content overlay on mobile
if (mainContentWrapper) {
    mainContentWrapper.addEventListener('click', (e) => {
        if (body.classList.contains(SIDEBAR_OPEN_CLASS) && window.innerWidth <= 768) {
            if (e.target.classList.contains('main-content-wrapper') || e.target.closest('.intro-hero')) {
                closeSidebar();
            }
        }
    });
}

// Close sidebar when clicking a navigation link on mobile
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
}

// ✅ Handle theme toggle (only if toggle button exists)
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle(DARK_THEME_CLASS);
        localStorage.setItem('theme', body.classList.contains(DARK_THEME_CLASS) ? 'dark' : 'light');
    });
}

// ✅ Apply saved theme immediately when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add(DARK_THEME_CLASS);
    }

    // Start typing animation only if typing element exists
    type();
});

// Auto-close sidebar if window resizes past breakpoint
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        closeSidebar();
    }
});
