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
                <section className="hero" style={{ background: 'linear-gradient(180deg, var(--bg-color) 0%, rgba(255,255,255,0.6) 100%)', padding: '120px 0 80px' }}>
                    <div className="container reveal">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                                    Revitalize Your Life with <br />
                                    <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #1a4d2e, #4f6f52)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                        Nature's Finest Superfoods
                                    </span>
                                </h1>

                                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8', textAlign: 'left' }}>
                                    <strong>Fiona Organics</strong> brings you the purest, farm-fresh powders.
                                    Our products are carefully sourced, sun-dried, and stone-ground to preserve 100% of their natural nutrients.
                                </p>

                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap' }}>
                                    <a href="#products" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Explore Products</a>
                                    <a href="#benefits" className="btn" style={{ background: 'white', border: '2px solid var(--accent-color)', color: 'var(--accent-color)', padding: '15px 40px', fontSize: '1.1rem' }}>Why Organic?</a>
                                </div>

                                {/* Key Features Icons */}
                                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1.5rem', flexWrap: 'wrap', opacity: 0.8 }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <span style={{ fontSize: '1.5rem' }}>🌿</span><br /><span style={{ fontSize: '0.8rem', fontWeight: 600 }}>100% Organic</span>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <span style={{ fontSize: '1.5rem' }}>🚜</span><br /><span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Farm Fresh</span>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <span style={{ fontSize: '1.5rem' }}>🔬</span><br /><span style={{ fontSize: '0.8rem', fontWeight: 600 }}>Lab Tested</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: '10%',
                                        left: '10%',
                                        width: '100%',
                                        height: '100%',
                                        background: 'var(--accent-color)',
                                        opacity: 0.1,
                                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                                        zIndex: 0
                                    }}></div>
                                    <img
                                        src="/assets/images/products/moringa.png"
                                        alt="Fiona Organics Moringa"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            borderRadius: '20px',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                            position: 'relative',
                                            zIndex: 1,
                                            transform: 'rotate(-2deg)'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section id="products" className="features">
                    <div className="container">
                        <h2 className="section-title reveal">Our Organic Superfoods</h2>

                        <div className="features-grid">
                            {products.map((product) => (
                                <div key={product.id} className="feature-card reveal" style={{ textAlign: 'left', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                    {product.image && (
                                        <div style={{ width: '100%', height: '240px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                        </div>
                                    )}
                                    {!product.image && <div className="feature-icon" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{product.icon}</div>}

                                    <h3 style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>{product.name}</h3>
                                    <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {product.tagline}
                                    </p>

                                    <div style={{ marginBottom: '1rem', flex: 1 }}>
                                        <strong>💚 Benefits:</strong><br />
                                        <span style={{ color: 'var(--text-secondary)' }}>{product.benefits}</span>
                                    </div>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <strong>🥣 How to Use:</strong><br />
                                        <span style={{ color: 'var(--text-secondary)' }}>{product.uses}</span>
                                    </div>

                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <strong>🏥 Good For Health:</strong><br />
                                        <span style={{ color: 'var(--text-secondary)' }}>{product.health}</span>
                                    </div>

                                    <button
                                        className="btn btn-primary"
                                        style={{ width: '100%', marginTop: 'auto' }}
                                        onClick={openModal}
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Organic Section */}
                <section id="benefits" className="reveal" style={{ padding: '100px 0', backgroundColor: '#Eeffe5' }}>
                    <div className="container">
                        <h2 className="section-title">Why Choose Organic?</h2>
                        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', background: '#fff', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>🚫</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>100% Chemical Free</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                        Conventional farming uses synthetic pesticides and fertilizers.
                                        <strong>Fiona Organics</strong> products are grown naturally, ensuring that no harmful toxins enter your body.
                                        We strictly say NO to GMOs and artificial additives.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', margin: '40px 0', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', background: '#fff', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>⚡</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Brimming with Nutrients</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                        Studies show that organic crops contain significantly higher levels of antioxidants and essential vitamins.
                                        Our stone-grinding process ensures that these delicate nutrients (like Vitamin C in Moringa) are preserved, not destroyed by heat.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', background: '#fff', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>🌍</div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Better for the Planet</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                                        Organic farming supports healthy soil and pollinator biodiversity.
                                        By choosing Fiona Organics, you aren't just choosing health for yourself; you are supporting sustainable agriculture that protects Mother Earth.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Health Banner */}
                <section className="cta reveal">
                    <div className="container">
                        <div className="cta-box" style={{ background: '#e8f5e9', border: '1px solid #c8e6c9' }}>
                            <h2 style={{ color: '#1b5e20' }}>Why Choose Fiona Organics?</h2>
                            <p style={{ marginBottom: '2rem', color: '#388e3c' }}>100% Pure & Preservative Free. Sourced directly from nature.</p>

                            <button className="btn btn-primary" onClick={openModal}> Connect With Us</button>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="reveal" style={{ padding: '100px 0', backgroundColor: '#f9fbf2' }}>
                    <div className="container">
                        <h2 className="section-title">Get In Touch</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>

                            {/* Address */}
                            <div style={{ flex: 1, minWidth: '280px', padding: '20px' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📍</div>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Visit Us</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                                    Habra, North Habra,<br />
                                    North 24 Parganas,<br />
                                    West Bengal, India
                                </p>
                            </div>

                            {/* Phone */}
                            <div style={{ flex: 1, minWidth: '280px', padding: '20px' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📞</div>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Call Us</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                    <a href="tel:+918900686683" style={{ textDecoration: 'none', borderBottom: '1px solid currentColor' }}>+91 8900686683</a>
                                </p>
                            </div>

                            {/* Email */}
                            <div style={{ flex: 1, minWidth: '280px', padding: '20px' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✉️</div>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-color)' }}>Email Us</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                    <a href="mailto:fionaorganics@gmail.com" style={{ textDecoration: 'none', borderBottom: '1px solid currentColor' }}>fionaorganics@gmail.com</a>
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <InterestModal isOpen={isModalOpen} onClose={closeModal} />
            <Footer />
        </div>
    );
}
