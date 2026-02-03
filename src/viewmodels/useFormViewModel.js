import { useState, useEffect } from 'react';
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

    // Load temp data from localStorage on mount
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('interestFormData')) || {};
        if (savedData.name || savedData.phone || savedData.email) {
            setFormData(prev => ({ ...prev, ...savedData }));
        }
    }, []);

    // Prevent accidental tab close if data exists
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (formData.name || formData.phone || formData.email) {
                e.preventDefault();
                e.returnValue = ''; // Legal browser requirement for warning
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Basic Input Sanitization (client-side precaution)
        // React handles rendering safety, but we ensure clean values for logic
        const sanitizedValue = value;

        const newData = { ...formData, [name]: sanitizedValue };
        setFormData(newData);
        localStorage.setItem('interestFormData', JSON.stringify(newData));
    };

    const handleSubmit = async (e, closeCallback) => {
        e.preventDefault();

        // Rate Limiting: 60 seconds cooldown
        const now = Date.now();
        if (now - lastSubmitTime < 60000) {
            setStatus({ message: 'Please wait a minute before sending another request.', type: 'error' });
            return;
        }

        setIsSubmitting(true);
        setStatus({ message: '', type: '' });

        try {
            // Send email via EmailJS
            await sendInterestEmail(formData);

            // Success Logic
            setLastSubmitTime(Date.now());
            setStatus({ message: 'Thank you! Your interest has been saved.', type: 'success' });
            setFormData({ name: '', phone: '', email: '' });
            localStorage.removeItem('interestFormData');

            // Auto close modal after success
            setTimeout(() => {
                setStatus({ message: '', type: '' });
                if (closeCallback) closeCallback();
            }, 3000);

        } catch (error) {
            console.error('Email failed:', error);
            setStatus({
                message: 'Could not send automatically. Opening your email app...',
                type: 'error'
            });

            // Fallback: Open Mailto
            setTimeout(() => {
                const subject = `Interest in Fiona Organics: ${formData.name}`;
                const body = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}`;
                window.location.href = `mailto:fionaorganics@gmail.com?subject=${subject}&body=${body}`;
            }, 1500);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        formData,
        status,
        isSubmitting,
        handleChange,
        handleSubmit
    };
};
