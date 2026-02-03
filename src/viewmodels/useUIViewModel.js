import { useState, useEffect } from 'react';

export const useUIViewModel = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const openModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);

    // Reveal on Scroll Logic
    useEffect(() => {
        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
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
        revealOnScroll(); // Trigger once on mount

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return {
        isMenuOpen,
        toggleMenu,
        isModalOpen,
        openModal,
        closeModal
    };
};
