import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Community = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const formRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Initialize with your Public Key
        emailjs.init("YOUR_PUBLIC_KEY");
    }, []);

    const handleJoinSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Using EmailJS to send the form
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
            {/* Hero Section */}
            <section className="section" style={{ background: '#112211', color: 'white', padding: '8rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="reveal">
                        <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '1rem' }}>The fiona-organics Inner Circle</span>
                        <h1 style={{ fontSize: '4.5rem', marginTop: '1.5rem', color: 'white' }}>Join Our Community</h1>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '2rem auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
                            We are building more than just a brand. We are building a movement of people who care about purity, village heritage, and the science of organic wellness.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '6rem', alignItems: 'start' }}>

                    <div className="reveal">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', color: 'var(--primary)' }}>Why Join Us?</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div style={{ fontSize: '2.5rem' }}>🎁</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Exclusive Early Access</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>Be the first to know when our small-batch manufacturing cycles are ready for shipping.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div style={{ fontSize: '2.5rem' }}>📚</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Organic Wisdom</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>Receive weekly insights on how to integrate Moringa, Ashwagandha, and Beetroot into your modern lifestyle.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div style={{ fontSize: '2.5rem' }}>🚜</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Village Stories</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>Get direct updates from the farmers in West Bengal who grow your superfoods.</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '5rem', padding: '3rem', background: '#f8f9f8', borderRadius: '40px', border: '1px solid #eee' }}>
                            <h4 style={{ marginBottom: '1.5rem' }}>Need Direct Help?</h4>
                            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Our support team in Habra is always ready to assist you with any inquiries.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <p><strong>📍 Registered Unit:</strong> Habra, WB - 743263</p>
                                <p><strong>📞 Call Us:</strong> +91 8900686683</p>
                                <p><strong>✉️ Email:</strong> test@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="reveal" style={{ background: 'var(--white)', padding: '4rem', borderRadius: '48px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', position: 'sticky', top: '120px' }}>
                        <form ref={formRef} onSubmit={handleJoinSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Become a Member</h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>Start your journey towards pure organic wellness today.</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)' }}>Full Name</label>
                                <input type="text" name="user_name" required placeholder="John Doe" style={{ padding: '1.2rem', borderRadius: '16px', border: '1px solid #eee', outline: 'none', background: '#fcfcfc' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)' }}>Email Address</label>
                                <input type="email" name="user_email" required placeholder="john@example.com" style={{ padding: '1.2rem', borderRadius: '16px', border: '1px solid #eee', outline: 'none', background: '#fcfcfc' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)' }}>I am interested in...</label>
                                <select name="interest" style={{ padding: '1.2rem', borderRadius: '16px', border: '1px solid #eee', outline: 'none', background: '#fcfcfc', appearance: 'none' }}>
                                    <option>Moringa Powder</option>
                                    <option>Ashwagandha Extract</option>
                                    <option>Beetroot Powder</option>
                                    <option>All Products</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)' }}>Your Message (Optional)</label>
                                <textarea name="message" rows="4" placeholder="Tell us about your health goals..." style={{ padding: '1.2rem', borderRadius: '16px', border: '1px solid #eee', outline: 'none', background: '#fcfcfc', resize: 'none' }}></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                                style={{ opacity: isSubmitting ? 0.7 : 1, padding: '1.4rem', marginTop: '1rem', fontSize: '1.1rem' }}
                            >
                                {isSubmitting ? 'Joining...' : 'Join the Community'}
                            </button>

                            {submitStatus === 'success' && <p style={{ color: '#2d6a4f', fontSize: '0.95rem', textAlign: 'center', background: '#e8f5e9', padding: '1rem', borderRadius: '12px' }}>✔ Welcome! You've successfully joined.</p>}
                            {submitStatus === 'error' && <p style={{ color: '#d00000', fontSize: '0.95rem', textAlign: 'center', background: '#ffebee', padding: '1rem', borderRadius: '12px' }}>✖ Connection error. Please try again.</p>}

                            <p style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.5, marginTop: '1rem' }}>
                                By joining, you agree to receive updates from fiona-organics.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Community;
