import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        const reveals = document.querySelectorAll('.reveal');
        const handleReveal = () => {
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', handleReveal);
        handleReveal();
        return () => window.removeEventListener('scroll', handleReveal);
    }, []);

    return (
        <main>
            <section className="hero">
                <div className="container" style={{ position: 'relative', zIndex: '5' }}>
                    <div className="hero-content">
                        <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Premier Herbal Collection</span>
                        <h1 style={{ marginTop: '1rem' }}>Pure Nature, <br />Crafted for Wellness.</h1>
                        <p>Experience the finest organic powders manufactured with traditional wisdom and modern precision. 100% natural, locally sourced, and powerful.</p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Link to="/products" className="btn btn-primary">Shop Now</Link>
                            <Link to="/story" className="btn btn-outline">Our Story</Link>
                        </div>
                    </div>
                </div>
                <div className="hero-image" style={{ borderRadius: '0 0 0 100px' }}></div>
            </section>

            <section className="section container">
                <div className="reveal" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Welcome to fiona-organics</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        We believe that true health starts with the purity of what you consume. Our journey is dedicated to bringing the raw power of medicinal plants directly from the villages of West Bengal to your daily routine.
                    </p>
                </div>
            </section>

            <section className="section" style={{ background: '#f8f9f8' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div className="reveal product-card" style={{ border: 'none', background: 'white' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
                            <h4>100% Organic</h4>
                            <p>Zero pesticides, zero additives. Pure herbal goodness in every gram.</p>
                        </div>
                        <div className="reveal product-card" style={{ border: 'none', background: 'white' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏘️</div>
                            <h4>Village Sourced</h4>
                            <p>Hand-picked from local farmers in West Bengal to support community growth.</p>
                        </div>
                        <div className="reveal product-card" style={{ border: 'none', background: 'white' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
                            <h4>High Potency</h4>
                            <p>Natural processing techniques preserve the vital nutrients and enzymes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
