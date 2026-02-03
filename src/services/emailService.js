import emailjs from '@emailjs/browser';

// Load credentials from environment variables (Secure & Maintainable)
const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export const sendInterestEmail = async (formData) => {
    // Check if configuration is missing
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS Configuration Missing. Check your .env file.');

        // Detailed fallback for Dev/Demo purposes
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('--- MOCK EMAIL SENT ---');
                console.log('To: fionaorganics@gmail.com');
                console.log('Data:', formData);
                console.log('-----------------------');
                resolve({ text: 'OK (Mock)' });
            }, 1000);
        });
    }

    try {
        const templateParams = {
            to_name: 'Fiona Organics Team',
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: `New Lead!\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`
        };

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            PUBLIC_KEY
        );
        return response;
    } catch (error) {
        throw error;
    }
};
