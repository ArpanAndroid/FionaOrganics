document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Modal Logic
    const modal = document.getElementById('interestModal');
    const closeBtn = document.querySelector('.close-modal');

    // Open Modal logic
    document.querySelectorAll('a[href="#contact"], .btn-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Check if it's the "Coming Soon" button or any Shop/Order button
            if (btn.textContent.includes('Coming Soon') || btn.textContent.includes('Shop') || btn.textContent.includes('Order')) {
                e.preventDefault();
                // Open the modal to capturing interest
                modal.style.display = 'flex';
            }
        });
    });

    // Close Modal
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = 'none';
    }
});

// Google Form handles validation internally.
