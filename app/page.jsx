'use client';

import React from 'react';
import { useUIViewModel } from './viewmodels/useUIViewModel';
import Header from './components/Header';
import Footer from './components/Footer';
import InterestModal from './components/InterestModal';
import { products } from './models/data';

export default function Home() {
    const { isMenuOpen, toggleMenu, isModalOpen, openModal, closeModal } = useUIViewModel();

    return (
        <div className="App">
            <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

            <main>
                {/* Hero Section */}
                <section className="hero" style={{ padding: '160px 0 100px', background: 'var(--bg-color)' }}>
                    <div className="container">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6rem', flexWrap: 'wrap-reverse' }}>
                            <div style={{ flex: '1.2', minWidth: '350px' }} className="reveal">
                                <span className="section-subtitle" style={{ textAlign: 'left' }}>Nature's Purest Essence</span>
                                <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '2rem', lineHeight: '1.1' }}>
                                    Elevate Your Wellbeing with <br />
                                    <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Organic Superfoods</span>
                                </h1>

                                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.9' }}>
                                    Experience the transformative power of farm-fresh, stone-ground powders.
                                    <strong> Fiona Organics</strong> delivers pure, unadulterated nutrition directly to your doorstep.
                                </p>

                                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                                    <a href="#products" className="btn btn-primary">Our Collections</a>
                                    <a href="#process" className="btn btn-outline">The Process</a>
                                </div>

                                <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', borderTop: '1px solid rgba(26,77,46,0.1)', paddingTop: '2.5rem' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>100%</h4>
                                        <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)' }}>Organic</p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Pure</h4>
                                        <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)' }}>Handcrafted</p>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>Zero</h4>
                                        <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)' }}>Additives</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ flex: '1', minWidth: '350px' }} className="reveal">
                                <div style={{ position: 'relative' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '-20px',
                                        right: '-20px',
                                        width: '100%',
                                        height: '100%',
                                        border: '1px solid var(--primary-color)',
                                        borderRadius: '40px',
                                        opacity: 0.1,
                                        zIndex: 0
                                    }}></div>
                                    <img
                                        src="/assets/images/products/moringa.png"
                                        alt="Premium Moringa Powder"
                                        style={{
                                            width: '100%',
                                            borderRadius: '40px',
                                            boxShadow: 'var(--shadow-premium)',
                                            position: 'relative',
                                            zIndex: 1
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section id="products" style={{ background: '#fff' }}>
                    <div className="container">
                        <span className="section-subtitle">The Collection</span>
                        <h2 className="section-title">Our Pure Superfoods</h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '3rem'
                        }}>
                            {products.map((product) => (
                                <div key={product.id} className="feature-card reveal" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{
                                        width: '100%',
                                        height: '350px',
                                        overflow: 'hidden',
                                        borderRadius: '20px',
                                        marginBottom: '2.5rem',
                                        background: 'var(--bg-color)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s var(--transition-premium)' }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </div>

                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h3>
                                    <p style={{ color: 'var(--accent-color)', fontWeight: '700', fontSize: '0.8rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '3px' }}>
                                        {product.tagline}
                                    </p>

                                    <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>{product.benefits}</p>
                                    </div>

                                    <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(26,77,46,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <button className="btn btn-primary" style={{ padding: '12px 30px', fontSize: '0.85rem' }} onClick={openModal}>
                                            Inquire Now
                                        </button>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--primary-light)', fontWeight: '600' }}>100% Organic</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section id="process" style={{ background: 'var(--bg-color)' }}>
                    <div className="container">
                        <div style={{ display: 'flex', gap: '6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '350px' }} className="reveal">
                                <img
                                    src="/assets/images/logo.jpeg"
                                    alt="Process"
                                    style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow-premium)' }}
                                />
                            </div>
                            <div style={{ flex: 1.2, minWidth: '350px' }} className="reveal">
                                <span className="section-subtitle" style={{ textAlign: 'left' }}>Our Commitment</span>
                                <h2 style={{ fontSize: '3.5rem', marginBottom: '2.5rem', textAlign: 'left', lineHeight: '1.2' }}>The Pure <br />Process</h2>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                                    <div style={{ display: 'flex', gap: '2rem' }}>
                                        <div className="feature-icon-wrapper" style={{ flexShrink: 0 }}>🌱</div>
                                        <div>
                                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Direct Sourcing</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>We partner directly with small-scale organic farms to ensure the highest quality ingredients.</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '2rem' }}>
                                        <div className="feature-icon-wrapper" style={{ flexShrink: 0 }}>☀️</div>
                                        <div>
                                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Solar Drying</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>Natural drying techniques preserve the heat-sensitive nutrients and vibrant colors.</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: '2rem' }}>
                                        <div className="feature-icon-wrapper" style={{ flexShrink: 0 }}>🪨</div>
                                        <div>
                                            <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Stone Grounding</h4>
                                            <p style={{ color: 'var(--text-secondary)' }}>Ancient grounding methods maintain the molecular integrity of every superfood.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" style={{ background: '#fff' }}>
                    <div className="container">
                        <div className="feature-card" style={{ padding: '6rem', textAlign: 'center', background: 'var(--primary-color)', color: '#fff' }}>
                            <span className="section-subtitle" style={{ color: 'var(--accent-color)' }}>Connect With Us</span>
                            <h2 style={{ fontSize: '4rem', marginBottom: '2rem', color: '#fff' }}>Start Your Journey <br />to Pure Health</h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '4rem', opacity: 0.8, maxWidth: '700px', margin: '0 auto 4rem' }}>
                                Have questions about our products or wholesale opportunities? Our team is here to guide you.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
                                <div>
                                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--accent-color)' }}>Call Us</p>
                                    <a href="tel:+918900686683" style={{ fontSize: '1.5rem', fontWeight: '500' }}>+91 8900686683</a>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--accent-color)' }}>Email Us</p>
                                    <a href="mailto:fionaorganics@gmail.com" style={{ fontSize: '1.5rem', fontWeight: '500' }}>fionaorganics@gmail.com</a>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem', color: 'var(--accent-color)' }}>Visit Us</p>
                                    <p style={{ fontSize: '1.2rem' }}>West Bengal, India</p>
                                </div>
                            </div>

                            <button className="btn" style={{ marginTop: '5rem', background: '#fff', color: 'var(--primary-color)', padding: '20px 60px' }} onClick={openModal}>
                                Request a Callback
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <InterestModal isOpen={isModalOpen} onClose={closeModal} />
            <Footer />
        </div>
    );
}
