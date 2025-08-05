function toggleMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(event.target);
    const nom = formData.get('nom');
    const email = formData.get('email');
    const sujet = formData.get('sujet');
    
    // Simulation d'envoi de message
    alert(`Merci ${nom} ! Votre message concernant "${sujet}" a été envoyé. Nous vous répondrons à l'adresse ${email}.`);
    
    // Réinitialiser le formulaire
    event.target.reset();
}

// Fermer le menu mobile quand on clique à l'extérieur
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (window.innerWidth <= 768 && 
        sidebar &&
        !sidebar.contains(event.target) && 
        menuBtn &&
        !menuBtn.contains(event.target) && 
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && window.innerWidth > 768) {
        sidebar.classList.remove('active');
    }
});

// Animation au défilement
function animateOnScroll() {
    const cards = document.querySelectorAll('.card, .nav-card, .article-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisible = 150;
        
        if (cardTop < window.innerHeight - cardVisible) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialisation des animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .nav-card, .article-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Petite pause pour éviter le flash
    setTimeout(() => {
        animateOnScroll();
        window.addEventListener('scroll', animateOnScroll);
    }, 100);
});

// Mise à jour du menu actif en fonction de la page actuelle
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
