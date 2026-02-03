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

// Form Logic: Auto-save and Submission
const interestForm = document.getElementById('interestForm');
const formStatus = document.getElementById('formStatus');

if (interestForm) {
    // 1. Load temp data from localStorage
    const savedData = JSON.parse(localStorage.getItem('interestFormData')) || {};
    if (savedData.name) document.getElementById('name').value = savedData.name;
    if (savedData.phone) document.getElementById('phone').value = savedData.phone;
    if (savedData.email) document.getElementById('email').value = savedData.email;

    // 2. Save temp data on input
    interestForm.addEventListener('input', (e) => {
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };
        localStorage.setItem('interestFormData', JSON.stringify(formData));
    });

    // 3. Handle Submission
    interestForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = interestForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formStatus.style.display = 'none';

        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };

        try {
            const response = await fetch('send_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                formStatus.style.color = 'green';
                formStatus.textContent = result.message;
                interestForm.reset();
                localStorage.removeItem('interestFormData'); // Clear temp data on success
                setTimeout(() => {
                    modal.style.display = 'none';
                    formStatus.textContent = '';
                    formStatus.style.display = 'none';
                }, 3000);
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            formStatus.style.color = 'red';
            formStatus.textContent = error.message;
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit Interest';
            formStatus.style.display = 'block';
        }
    });
}
