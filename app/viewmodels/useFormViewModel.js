'use client';

import { useState, useEffect, useCallback } from 'react';
import { sendInterestEmail } from '../services/emailService';

export const useFormViewModel = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [status, setStatus] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [lastSubmitTime, setLastSubmitTime] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Ensure we're on the client side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Load temp data from localStorage on mount
    useEffect(() => {
        if (!isMounted) return;
        
        try {
            const savedData = JSON.parse(localStorage.getItem('interestFormData') || '{}');
            if (savedData.name || savedData.phone || savedData.email) {
                setFormData(prev => ({ ...prev, ...savedData }));
            }
        } catch (error) {
            console.error('Error loading form data:', error);
        }
    }, [isMounted]);

    // Prevent accidental tab close if data exists
    useEffect(() => {
        if (!isMounted) return;

        const handleBeforeUnload = (e) => {
            if (formData.name || formData.phone || formData.email) {
                e.preventDefault();
                e.returnValue = ''; // Legal browser requirement for warning
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [formData, isMounted]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Basic Input Sanitization (client-side precaution)
        // Remove potential XSS characters and limit length
        const sanitizedValue = value
            .replace(/[<>]/g, '') // Remove potential HTML tags
            .slice(0, 500); // Limit length

        const newData = { ...formData, [name]: sanitizedValue };
        setFormData(newData);
        // Only save to localStorage if values are valid and we're on client
        if (isMounted && sanitizedValue.trim()) {
            try {
                localStorage.setItem('interestFormData', JSON.stringify(newData));
            } catch (error) {
                console.error('Error saving form data:', error);
            }
        }
    };

    const handleSubmit = async (e, closeCallback) => {
        e.preventDefault();

        // 1. Input Sanitization
        const sanitizedName = formData.name.trim().replace(/[<>]/g, '').slice(0, 100);
        const sanitizedPhone = formData.phone.trim().replace(/[<>]/g, '').slice(0, 20);
        const sanitizedEmail = formData.email.trim().toLowerCase().replace(/[<>]/g, '').slice(0, 100);

        if (!sanitizedName || sanitizedName.length < 2) {
            setStatus({ message: 'Please provide a valid name (at least 2 characters).', type: 'error' });
            return;
        }

        // 2. Validation Logic
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;

        if (!emailRegex.test(sanitizedEmail)) {
            setStatus({ message: 'Please enter a valid email address.', type: 'error' });
            return;
        }

        if (!phoneRegex.test(sanitizedPhone)) {
            setStatus({ message: 'Please enter a valid Indian phone number (10 digits starting with 6-9).', type: 'error' });
            return;
        }

        // 3. Rate Limiting: 60 seconds cooldown
        const now = Date.now();
        if (now - lastSubmitTime < 60000) {
            setStatus({ message: 'Please wait a minute before sending another request.', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ message: '', type: '' });

        try {
            // Send email via secure API route
            await sendInterestEmail({
                name: sanitizedName,
                phone: sanitizedPhone,
                email: sanitizedEmail
            });

            // Success Logic - Clear form data immediately
            setLastSubmitTime(Date.now());
            setStatus({ message: 'Thank you! Your interest has been saved. We will contact you soon.', type: 'success' });
            
            // Clear form data immediately
            setFormData({ name: '', phone: '', email: '' });
            
            // Clear localStorage immediately
            if (isMounted) {
                try {
                    localStorage.removeItem('interestFormData');
                } catch (error) {
                    console.error('Error clearing form data:', error);
                }
            }

            // Auto close modal after success message is shown
            setTimeout(() => {
                setStatus({ message: '', type: '' });
                if (closeCallback) {
                    closeCallback();
                    // Reset form completely after modal closes
                    setTimeout(() => {
                        setFormData({ name: '', phone: '', email: '' });
                    }, 100);
                }
            }, 3000);

        } catch (error) {
            console.error('Email failed:', error);
            setStatus({
                message: 'Could not send automatically. Opening your email app...',
                type: 'error'
            });

            // Fallback: Open Mailto (only on client)
            if (isMounted) {
                setTimeout(() => {
                    const subject = encodeURIComponent(`Interest in Fiona Organics: ${formData.name}`);
                    const body = encodeURIComponent(`Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`);
                    window.location.href = `mailto:fionaorganics@gmail.com?subject=${subject}&body=${body}`;
                }, 1500);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Function to reset form (useful when modal closes)
    const resetForm = useCallback(() => {
        setFormData({ name: '', phone: '', email: '' });
        setStatus({ message: '', type: '' });
        if (isMounted) {
            try {
                localStorage.removeItem('interestFormData');
            } catch (error) {
                console.error('Error clearing form data:', error);
            }
        }
    }, [isMounted]);

    return {
        formData,
        status,
        isSubmitting,
        handleChange,
        handleSubmit,
        resetForm
    };
};
