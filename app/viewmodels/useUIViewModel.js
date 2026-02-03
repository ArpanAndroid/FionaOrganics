'use client';

import { useState, useEffect } from 'react';

export const useUIViewModel = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure we're on the client side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const openModal = (e) => {
        if (e) e.preventDefault();
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        // Close mobile menu when modal closes
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    // Close menu when clicking outside (mobile)
    useEffect(() => {
        if (!isMounted) return;

        const handleClickOutside = (e) => {
            if (isMenuOpen && !e.target.closest('header') && !e.target.closest('.nav-links')) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.body.style.overflow = '';
        };
    }, [isMenuOpen, isMounted]);

    // Reveal on Scroll Logic
    useEffect(() => {
        if (!isMounted) return;

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
    }, [isMounted]);

    return {
        isMenuOpen,
        toggleMenu,
        isModalOpen,
        openModal,
        closeModal
    };
};
