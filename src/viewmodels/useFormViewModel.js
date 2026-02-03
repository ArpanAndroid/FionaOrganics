import { useState, useEffect } from 'react';

export const useFormViewModel = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [status, setStatus] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Load temp data from localStorage on mount
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('interestFormData')) || {};
        if (savedData.name || savedData.phone || savedData.email) {
            setFormData(prev => ({ ...prev, ...savedData }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const newData = { ...formData, [name]: value };
        setFormData(newData);
        localStorage.setItem('interestFormData', JSON.stringify(newData));
    };

    const handleSubmit = async (e, closeCallback) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ message: '', type: '' });

        try {
            const response = await fetch('/send_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ message: result.message, type: 'success' });
                setFormData({ name: '', phone: '', email: '' });
                localStorage.removeItem('interestFormData');

                // Auto close modal after success
                setTimeout(() => {
                    setStatus({ message: '', type: '' });
                    if (closeCallback) closeCallback();
                }, 3000);
            } else {
                throw new Error(result.message || 'Submission failed');
            }
        } catch (error) {
            setStatus({ message: error.message, type: 'error' });
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
