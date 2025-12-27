// Display or hide the hamburger menu on click
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Translation object
const translations = {
    en: {
        // Navigation
        'nav-about': 'About',
        'nav-experience': 'Experience',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        
        // Profile section
        'profile-hello': "Hello, I'm",
        'profile-role': 'Software Engineering Student',
        'btn-cv': 'Download CV',
        'btn-contact': 'Contact Me',
        
        // About section
        'about-learn': 'Learn More',
        'about-title': 'About Me',
        'about-exp-title': 'Experience',
        'about-exp-desc': '1+ Year<br/>Frontend Developer',
        'about-edu-title': 'Education',
        'about-edu-desc': 'University Path in Technology<br/>Bachelor in Software Engineering',
        'about-text': 'Passionate software engineering student with a strong foundation in frontend and backend development. I love creating intuitive user interfaces and solving complex problems through code.',
        
        // Experience section
        'exp-explore': 'Explore My',
        'exp-title': 'Experience',
        'exp-frontend': 'Frontend',
        'exp-backend': 'Backend',
        'exp-experienced': 'Experienced',
        'exp-basic': 'Basic',
        
        // Projects section
        'projects-recent': 'My Recent Projects',
        'projects-title': 'Projects',
        'project-1-title': 'Algorithmic Trading - Machine Learning',
        'project-2-title': 'SurvivalKit<br>-',
        'project-3-title': 'Pokedex<br>-',
        'btn-github': 'GitHub',
        'btn-details': 'Details',
        
        // Contact section
        'contact-reach': 'Get In Touch',
        'contact-title': 'Contact Me',
        
        // Footer
        'footer-copyright': 'Copyright © 2026 Souad Goubaa. All rights reserved.'
    },
    fr: {
        // Navigation
        'nav-about': 'À propos',
        'nav-experience': 'Expérience',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        
        // Profile section
        'profile-hello': 'Bonjour, je suis',
        'profile-role': 'Étudiante en génie logiciel',
        'btn-cv': 'Télécharger CV',
        'btn-contact': 'Me contacter',
        
        // About section
        'about-learn': 'En savoir plus',
        'about-title': 'À propos de moi',
        'about-exp-title': 'Expérience',
        'about-exp-desc': '1+ Année<br/>Frontend Developer',
        'about-edu-title': 'Éducation',
        'about-edu-desc': 'Cheminement Universitaire en Technologie<br/>Baccalauréat en génie logiciel',
        'about-text': 'Étudiante passionnée en génie logiciel avec une solide base en développement frontend et backend. J\'adore créer des interfaces utilisateur intuitives et résoudre des problèmes complexes par le code.',
        
        // Experience section
        'exp-explore': 'Explorez Mes',
        'exp-title': 'Expériences',
        'exp-frontend': 'Frontend',
        'exp-backend': 'Backend',
        'exp-experienced': 'Expérimenté',
        'exp-basic': 'Basique',
        
        // Projects section
        'projects-recent': 'Mes projets récents',
        'projects-title': 'Projets',
        'project-1-title': 'Trading algorithmique - machine learning',
        'project-2-title': 'SurvivalKit<br>-',
        'project-3-title': 'Pokedex<br>-',
        'btn-github': 'GitHub',
        'btn-details': 'Détails',
        
        // Contact section
        'contact-reach': 'Me joindre',
        'contact-title': 'Contactez moi',
        
        // Footer
        'footer-copyright': 'Copyright © 2026 Souad Goubaa. Tous droits réservés.'
    }
};

// Get saved language or default to French
let currentLang = localStorage.getItem('language') || 'fr';

// Function to switch language
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update language toggle button text
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    });
}

// Function to toggle between languages
function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    switchLanguage(newLang);
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
});