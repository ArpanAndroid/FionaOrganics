import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
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
        <main style={{ paddingTop: '100px' }}>
            <section className="section container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Join the Movement</span>
                    <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Get in Touch</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>
                    <div className="reveal">
                        <h4 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Details</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ padding: '1rem', background: '#f0f4f1', borderRadius: '15px' }}>📍</div>
                                <div>
                                    <h6 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Registered Unit</h6>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Habra, West Bengal, India - 743263</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ padding: '1rem', background: '#f0f4f1', borderRadius: '15px' }}>📞</div>
                                <div>
                                    <h6 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Customer Support</h6>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+91 8900686683</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <div style={{ padding: '1rem', background: '#f0f4f1', borderRadius: '15px' }}>✉️</div>
                                <div>
                                    <h6 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>Inquiries</h6>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>test@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--primary)', borderRadius: '30px', color: 'white' }}>
                            <h5 style={{ color: 'white', marginBottom: '1rem' }}>Join Our Community</h5>
                            <p style={{ fontSize: '0.9rem', opacity: '0.8', marginBottom: '2rem' }}>Stay updated on our official launch and receive exclusive health tips from our village experts.</p>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input type="email" placeholder="Email address" style={{ flex: 1, padding: '0.8rem 1.5rem', borderRadius: '50px', border: 'none' }} />
                                <button className="btn btn-primary" style={{ background: 'var(--accent)', padding: '0.8rem 1.5rem' }}>Join</button>
                            </div>
                        </div>
                    </div>

                    <div className="reveal" style={{ background: 'var(--white)', padding: '3.5rem', borderRadius: '40px', boxShadow: 'var(--shadow)' }}>
                        <form ref={formRef} onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Send a Message</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Full Name</label>
                                <input type="text" name="user_name" required placeholder="Your Name" style={{ padding: '1.1rem', borderRadius: '15px', border: '1px solid #eee', outline: 'none' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                                <input type="email" name="user_email" required placeholder="your@email.com" style={{ padding: '1.1rem', borderRadius: '15px', border: '1px solid #eee', outline: 'none' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Message Subject</label>
                                <input type="text" name="subject" placeholder="What's this about?" style={{ padding: '1.1rem', borderRadius: '15px', border: '1px solid #eee', outline: 'none' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Inquiry Message</label>
                                <textarea name="message" required rows="5" placeholder="Tell us how we can help your journey..." style={{ padding: '1.1rem', borderRadius: '15px', border: '1px solid #eee', outline: 'none', resize: 'none' }}></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                                style={{ opacity: isSubmitting ? 0.7 : 1, padding: '1.2rem', marginTop: '1rem' }}
                            >
                                {isSubmitting ? 'Sending...' : 'Submit Message'}
                            </button>
                            {submitStatus === 'success' && <p style={{ color: '#2d6a4f', fontSize: '0.9rem', textAlign: 'center' }}>✔ Message sent successfully!</p>}
                            {submitStatus === 'error' && <p style={{ color: '#d00000', fontSize: '0.9rem', textAlign: 'center' }}>✖ Failed to send. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
