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
        'btn-cv': 'CV',
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
        'learning-title': 'Currently learning',

        //dot nav
        'dot-profile': 'Profile',
        'dot-about': 'About',
        'dot-experience': 'Experience',
        'dot-projects': 'Projects',
        'dot-contact': 'Contact',

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
        'btn-cv': 'CV',
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
        'learning-title': 'Actuellement en apprentissage',

        
        // Contact section
        'contact-reach': 'Me joindre',
        'contact-title': 'Contactez moi',

        //dot nav
        'dot-profile': 'Profil',
        'dot-about': 'À propos',
        'dot-experience': 'Expérience',
        'dot-projects': 'Projets',
        'dot-contact': 'Contact',

        
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

    // Update dot nav hover labels (data-label)
        document.querySelectorAll('[data-i18n-label]').forEach(el => {
        const key = el.getAttribute('data-i18n-label');
        if (translations[lang][key]) {
            el.dataset.label = translations[lang][key];
        }
        });

    
    // Update language toggle button text
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.textContent = lang === 'fr' ? 'EN' : 'FR';
    });
    
    // Mettre à jour les boutons de détails des projets
    document.querySelectorAll('.project-details-btn').forEach(btn => {
        const card = btn.closest('[data-project-id]');
        if (card) {
            const imageView = card.querySelector('.project-image-view');
            
            if (imageView.classList.contains('hidden')) {
                // Vue texte active - afficher "Retour" ou "Back"
                btn.textContent = lang === 'fr' ? 'Retour' : 'Back';
            } else {
                // Vue image active - afficher "Détails" ou "Details"
                btn.textContent = lang === 'fr' ? 'Détails' : 'Details';
            }
        }
    });
}

// Function to toggle between languages
function toggleLanguage() {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    switchLanguage(newLang);
}

// Fonction pour basculer entre la vue image et texte des projets
function toggleProjectView(projectId) {
    const card = document.querySelector(`[data-project-id="${projectId}"]`);
    const imageView = card.querySelector('.project-image-view');
    const textView = card.querySelector('.project-text-view');
    const detailsBtn = card.querySelector('.project-details-btn');
    
    // Basculer les vues
    if (imageView.classList.contains('hidden')) {
        // Retour à la vue image
        imageView.classList.remove('hidden');
        textView.classList.remove('active');
        
        // Mettre à jour le texte du bouton
        if (currentLang === 'fr') {
            detailsBtn.textContent = 'Détails';
        } else {
            detailsBtn.textContent = 'Details';
        }
    } else {
        // Passer à la vue texte
        imageView.classList.add('hidden');
        textView.classList.add('active');
        
        // Mettre à jour le texte du bouton
        if (currentLang === 'fr') {
            detailsBtn.textContent = 'Retour';
        } else {
            detailsBtn.textContent = 'Back';
        }
    }
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
});

// Indicateur de progression de scroll
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollTotal) * 100;
    scrollProgress.style.width = progress + '%';
});


//  ANIMATIONS AU SCROLL POUR MOBILE 
if (window.innerWidth <= 1200) {
    // Intersection Observer pour détecter les éléments visibles
    const observerOptions = {
        threshold: 0.15, // L'élément doit être visible à 15%
        rootMargin: '0px 0px -50px 0px' // Déclenche un peu avant qu'il soit complètement visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Une fois visible, on arrête d'observer (animation une seule fois)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments qui doivent s'animer
    const animateOnScroll = document.querySelectorAll(
        '.details-container, .color-container, article, .title, .section__text__p1, .profile-pfp, section'
    );
    
    animateOnScroll.forEach(el => {
        observer.observe(el);
    });
    
    // Animation spéciale pour la première section (profile) - visible immédiatement
    setTimeout(() => {
        const profileSection = document.querySelector('#profile');
        const profileElements = profileSection.querySelectorAll('.title, .section__text__p1, .profile-pfp');
        
        profileSection.classList.add('visible');
        profileElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// Smooth scroll amélioré pour mobile
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Fermer le menu hamburger si ouvert
            const menu = document.querySelector(".menu-links");
            const icon = document.querySelector(".hamburger-icon");
            if (menu.classList.contains('open')) {
                menu.classList.remove('open');
                icon.classList.remove('open');
            }
        }
    });
});

// Feedback haptique subtil sur les boutons (si supporté)
if ('vibrate' in navigator && window.innerWidth <= 1200) {
    document.querySelectorAll('.btn, .icon, .lang-toggle').forEach(element => {
        element.addEventListener('touchstart', () => {
            navigator.vibrate(10); // Vibration très légère de 10ms
        });
    });
}

//  Side dot nav: highlight current section 
window.addEventListener("DOMContentLoaded", () => {
  const sections = ["profile", "about", "experience", "projects", "contact"];
  const dots = document.querySelectorAll(".side-dot-nav .dot");

  if (!dots.length) return;

  const setActive = (id) => {
    dots.forEach((d) => d.classList.toggle("active", d.dataset.dot === id));
  };

  // Default active on load
  setActive("profile");

  // Use IntersectionObserver for accurate section detection
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    {
      threshold: 0.35, // how much of section must be visible to count as "active"
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});
