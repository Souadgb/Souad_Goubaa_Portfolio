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
        'about-exp-desc': '7+ Projects<br/>&<br/>Hackathons',
        'about-edu-title': 'Education',
        'about-edu-desc': 'University Path in Technology (2024) <br/>Bachelor in Software Engineering (2025-present)',
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
        'project-3-title': 'Pokedex',
        'btn-github': 'GitHub',
        'btn-details': 'Details',
        'learning-title': 'Currently learning',

        // project details

        //project 1
        'project-tech-title': 'Technologies',
        'project-features-title': 'Key Features',
        'project-1-desc': 'Algorithmic trading project built in Jupyter Notebook, focused on quantitative market analysis. Implements technical indicators and tests trading strategies in Python.',
        'project-1-feature-1': 'Market data analysis & preprocessing',
        'project-1-feature-2': 'Technical indicators (e.g., RSI) + feature engineering',
        'project-1-feature-3': 'Strategy testing / evaluation (backtesting mindset)',

        //project 2 
        'project-survivalkit-title': 'SurvivalKit — iOS App (Hackathon)',
        'project-survivalkit-desc': 'Mobile app built in 24 hours during a hackathon: context-aware emergency recommendations powered by geolocation and AI. Fast, action-oriented user experience.',
        'project-survivalkit-feature-1': 'Geolocation + map to find nearby resources',
        'project-survivalkit-feature-2': 'AI-assisted recommendations based on the user’s context and needs',
        'project-survivalkit-feature-3': 'Smooth iOS experience (React Native + Expo) with polished UI',


        //project 3
        'project-pokedex-title': 'Pokedex — Android Application',
        'project-pokedex-desc': 'Android Pokédex application using PokeAPI and a local SQLite database. Browse Pokémon, view detailed profiles, and manage favorites.',
        'project-pokedex-feature-1': 'Dynamic Pokémon list fetched from PokeAPI',
        'project-pokedex-feature-2': 'Detailed Pokémon profile (types, height, weight, image)',
        'project-pokedex-feature-3': 'Favorites management with local persistence (SQLite)',



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
        'about-exp-desc': '7+ Projets<br/>&</br/>Hackathons',
        'about-edu-title': 'Éducation',
        'about-edu-desc': 'Cheminement Universitaire en Technologie (2024) <br/>Baccalauréat en génie logiciel (2025-present)',
        'about-text': 'Étudiante passionnée en génie logiciel avec une solide base en développement frontend et backend. J\'adore créer des interfaces utilisateur intuitives et résoudre des problèmes complexes par le code.',
        
        // Experience section
        'exp-explore': 'Explorez Mes',
        'exp-title': 'Expériences',
        'exp-frontend': 'Frontend',
        'exp-backend': 'Backend',
        'exp-experienced': 'Expérimenté',
        'exp-basic': 'Basique',
        'learning-title': 'Actuellement en apprentissage',

        
        // Projects section
        'projects-recent': 'Mes projets récents',
        'projects-title': 'Projets',
        'project-1-title': 'Trading algorithmique - machine learning',
        'project-2-title': 'SurvivalKit',
        'project-3-title': 'Pokedex',
        'btn-github': 'GitHub',
        'btn-details': 'Détails',

        // project details

            //Projet 1
        'project-tech-title': 'Technologies',
        'project-features-title': 'Fonctionnalités clés',
        'project-1-desc': 'Projet de trading algorithmique développé sur Jupyter Notebook, axé sur l’analyse quantitative des marchés. Implémentation d’indicateurs techniques et tests de stratégies en Python.',
        'project-1-feature-1': 'Analyse et préparation de données de marché',
        'project-1-feature-2': 'Indicateurs techniques (ex. RSI) + features',
        'project-1-feature-3': 'Tests et évaluation de stratégies (logique backtesting)',

            //Projet 2
        'project-survivalkit-title': 'SurvivalKit — App iOS (Hackathon)',
        'project-survivalkit-desc': "Application mobile créée en 24h lors d’un hackathon : recommandations contextualisées en situation d’urgence grâce à la géolocalisation et l’IA. Interface rapide et orientée action.",
        'project-survivalkit-feature-1': 'Géolocalisation et carte pour repérer des ressources à proximité',
        'project-survivalkit-feature-2': 'Recommandations assistées par IA selon le contexte (besoin / situation)',
        'project-survivalkit-feature-3': 'Expérience iOS fluide (React Native + Expo) avec UI optimisée',

            //project 3
        'project-pokedex-title': 'Pokédex — Application Android',
        'project-pokedex-desc': 'Application Pokédex Android utilisant PokeAPI et une base de données SQLite. Consultation des Pokémon, fiche détaillée et gestion des favoris.',
        'project-pokedex-feature-1': 'Liste des Pokémon récupérés dynamiquement via PokeAPI',
        'project-pokedex-feature-2': 'Fiche détaillée d’un Pokémon (types, taille, poids, image)',
        'project-pokedex-feature-3': 'Gestion des favoris avec persistance locale (SQLite)',


        
        
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

