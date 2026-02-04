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
                <div className="container">
                    <div className="hero-content reveal active">
                        <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Premier Herbal Collection</span>
                        <h1 style={{ marginTop: '1rem' }}>Pure Nature, <br />Crafted for Wellness.</h1>
                        <p>Experience the finest organic powders manufactured with traditional wisdom and modern precision. 100% natural, locally sourced, and powerful.</p>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Link to="/products" className="btn btn-primary">Shop Now</Link>
                            <Link to="/story" className="btn btn-outline">Our Story</Link>
                        </div>
                    </div>
                    <div className="hero-image-wrapper reveal active">
                        <div className="hero-image"></div>
                    </div>
                </div>
            </section>

            <section className="section container">
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Welcome to fiona-organics</h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        We believe that true health starts with the purity of what you consume. Our journey is dedicated to bringing the raw power of medicinal plants directly from the villages of West Bengal to your daily routine. Every product we manufacture is a testament to the synergy between nature's wisdom and human care.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                    <div className="reveal product-card" style={{ border: 'none', background: '#f8f9f8', padding: '3rem' }}>
                        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🌿</div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>100% Organic</h4>
                        <p>Zero pesticides, zero additives. We maintain strict organic standards from seed to jar.</p>
                    </div>
                    <div className="reveal product-card" style={{ border: 'none', background: '#f8f9f8', padding: '3rem' }}>
                        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🏘️</div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Village Sourced</h4>
                        <p>We source directly from local farmers in West Bengal collection villages, ensuring peak freshness.</p>
                    </div>
                    <div className="reveal product-card" style={{ border: 'none', background: '#f8f9f8', padding: '3rem' }}>
                        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>☀️</div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Naturally Processed</h4>
                        <p>Shade-drying and cold-milling preserve the vital enzymes and nutritional integrity.</p>
                    </div>
                </div>
            </section>

            {/* Featured Collection Snippet */}
            <section className="section" style={{ background: '#112211', color: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>Signature Collection</span>
                        <h2 style={{ color: 'white', fontSize: '3rem', marginTop: '1rem' }}>Direct from the Source</h2>
                    </div>
                    <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
                        <div className="reveal product-card" style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <img src="/assets/images/moringa.png" alt="Moringa" className="product-img" />
                            <h4>Pure Moringa</h4>
                            <p style={{ color: 'var(--text-muted)' }}>The "Miracle Tree" leaf powder for total body revitalization.</p>
                            <Link to="/products" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Learn More</Link>
                        </div>
                        <div className="reveal product-card" style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <img src="/assets/images/ashwagandha.png" alt="Ashwagandha" className="product-img" />
                            <h4>Root Ashwagandha</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Ancient adaptogen for modern stress and hormone balance.</p>
                            <Link to="/products" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Learn More</Link>
                        </div>
                        <div className="reveal product-card" style={{ background: 'var(--white)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <img src="/assets/images/beetroot.png" alt="Beetroot" className="product-img" />
                            <h4>Vibrant Beetroot</h4>
                            <p style={{ color: 'var(--text-muted)' }}>Natural nitrate powerhouse for energy and blood flow.</p>
                            <Link to="/products" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Snippet */}
            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                    <div className="reveal">
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>From Village Roots</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                            Every jar of <strong>fiona-organics</strong> tells a story of the farmers in West Bengal. By collecting produce directly from the source, we ensure the farmers get a fair price and you get the purest possible product.
                        </p>
                        <div style={{ marginTop: '2.5rem' }}>
                            <Link to="/story" className="btn btn-primary">Read Our Story</Link>
                        </div>
                    </div>
                    <div className="reveal" style={{ position: 'relative' }}>
                        <img src="/assets/images/hero-bg.png" alt="Village Heritage" style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow)' }} />
                        <div style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'var(--white)', padding: '1.5rem', borderRadius: '20px', boxShadow: 'var(--shadow)' }}>
                            <h5 style={{ margin: 0, color: 'var(--primary)' }}>20+ Villages</h5>
                            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.7 }}>Sourcing Network</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community / CTA Section */}
            <section className="section" style={{ background: '#f0f4f1' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="reveal" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Optimize Your Vitality</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                            Join thousands of health-conscious individuals who are returning to nature. Subscribe for exclusive insights into herbal science and early launch updates.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <input type="email" placeholder="Enter your email" style={{
                                padding: '1.2rem 2rem',
                                borderRadius: '50px',
                                border: '1px solid #ddd',
                                minWidth: '300px',
                                outline: 'none'
                            }} />
                            <button className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>Join Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
