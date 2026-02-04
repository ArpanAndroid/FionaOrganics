import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Initialize EmailJS with Public Key
        // Replacing placeholder with a default valid format check
        emailjs.init("YOUR_PUBLIC_KEY");
    }, []);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current)
            .then((result) => {
                setSubmitStatus('success');
                setIsSubmitting(false);
                formRef.current.reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            }, (error) => {
                setSubmitStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--bg-cream)' }}>
            {/* Hero Header */}
            <section style={{ background: 'var(--primary)', color: 'white', padding: '12rem 0 6rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="reveal active">
                        <h1 style={{ fontSize: '4rem', color: 'white', marginBottom: '1rem' }}>Contact Us</h1>
                        <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>We'd love to hear from you. Join our community or send a message.</p>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="container" style={{ padding: '4rem 2rem 8rem', marginTop: '-4rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'start'
                }}>

                    {/* Info Card */}
                    <div className="reveal active" style={{
                        background: 'var(--white)',
                        padding: '3rem',
                        borderRadius: '24px',
                        boxShadow: 'var(--shadow)',
                        height: '100%'
                    }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary)' }}>Get in Touch</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                            Whether you're a customer, a local farmer, or interested in bulk wholesale, we are here to assist you.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>📍</span>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Our Unit</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Habra, West Bengal, India - 743263</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>📞</span>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Phone</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>+91 8900686683</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <span style={{ fontSize: '1.5rem' }}>✉️</span>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>test@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', padding: '2rem', background: '#f0f4f1', borderRadius: '16px' }}>
                            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Join the Movement</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Follow our journey towards pure organic wellness.</p>
                        </div>
                    </div>

                    {/* Form Card */}
                    <div className="reveal active" style={{
                        background: 'var(--white)',
                        padding: '3rem',
                        borderRadius: '24px',
                        boxShadow: 'var(--shadow)'
                    }}>
                        <form ref={formRef} onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.6rem' }}>Your Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Enter your full name"
                                    style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', background: '#fafafa', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.6rem' }}>Mobile Number</label>
                                <input
                                    type="tel"
                                    name="user_mobile"
                                    required
                                    placeholder="Enter your phone number"
                                    style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', background: '#fafafa', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.6rem' }}>Email Address</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="Enter your email"
                                    style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', background: '#fafafa', fontSize: '1rem' }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.6rem' }}>Message (Comments)</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="How can we help you?"
                                    style={{ width: '100%', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', background: '#fafafa', fontSize: '1rem', resize: 'none' }}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                                style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem', opacity: isSubmitting ? 0.7 : 1 }}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Now'}
                            </button>

                            {submitStatus === 'success' && (
                                <div style={{ padding: '1rem', background: '#e8f5e9', color: '#2d6a4f', borderRadius: '12px', textAlign: 'center', fontSize: '0.95rem' }}>
                                    ✔ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div style={{ padding: '1rem', background: '#ffebee', color: '#d00000', borderRadius: '12px', textAlign: 'center', fontSize: '0.95rem' }}>
                                    ✖ Failed to send message. Please try again or call us.
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Contact;
