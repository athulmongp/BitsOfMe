document.addEventListener('DOMContentLoaded', () => {
    // ===================================
    // 1. Particle Generation
    // ===================================
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        // Generate 50 particles for the background animation
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            // Set random position and animation delays/duration
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // ===================================
    // 2. Smooth Scroll
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===================================
    // 3. Button Interaction Effect
    // ===================================
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = ''; // Reset transform
            }, 100);
        });
    });

    // ===================================
    // 4. Mobile Menu Toggle
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    
    if (hamburger && mobileMenu && overlay) {
        const mobileLinks = mobileMenu.querySelectorAll('a');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            // Prevent scrolling when the menu is open
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        }

        hamburger.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking on a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }
});