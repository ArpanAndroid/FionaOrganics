import { useEffect } from 'react';

const OurStory = () => {
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
        <main style={{ paddingTop: '100px' }}>
            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                    <div className="reveal">
                        <div style={{ position: 'relative' }}>
                            <img src="/assets/images/moringa.png" style={{ width: '100%', borderRadius: '30px', boxShadow: 'var(--shadow)' }} alt="village roots" />
                            <div style={{
                                position: 'absolute',
                                bottom: '-2rem',
                                right: '-2rem',
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '2rem',
                                borderRadius: '20px',
                                maxWidth: '200px'
                            }}>
                                <h4 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>100%</h4>
                                <p style={{ fontSize: '0.8rem', opacity: '0.8' }}>Direct Village Collection</p>
                            </div>
                        </div>
                    </div>
                    <div className="reveal">
                        <span style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Roots</span>
                        <h2 style={{ fontSize: '3.5rem', margin: '1rem 0 2rem', color: 'var(--primary)' }}>A Journey from the <br />Village to Your Soul.</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            The fiona-organics story didn't begin in a boardroom; it began in the lush, green fields of rural West Bengal.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                            Growing up in the village, we saw the incredible power of natural herbs used in every household. However, we also noticed that by the time these herbs reached the cities, they lost their purity through long supply chains and additives.
                            <br /><br />
                            In 2024, we started our manufacturing journey in **Habra** with a single mission: to collect the finest produce directly from our village farmers and process them with zero compromises. Every jar of fiona-organics is a tribute to our village roots.
                        </p>
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <div>
                                <h6 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>Habra, WB</h6>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Manufacturing Hub</p>
                            </div>
                            <div>
                                <h6 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>20+ Villages</h6>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Sourcing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: '#fcfcfc' }}>
                <div className="container">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '3rem' }}>Why We Stand Out</h2>
                        <p style={{ color: 'var(--text-muted)' }}>We bridge the gap between rural purity and modern wellness.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                        <div className="reveal product-card" style={{ textAlign: 'center', border: 'none' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏠</div>
                            <h4>Direct Village Collection</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>We eliminate middlemen. Our experts travel to collection villages to inspect and hand-pick the raw materials directly from the source.</p>
                        </div>
                        <div className="reveal product-card" style={{ textAlign: 'center', border: 'none' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>☀️</div>
                            <h4>Shade-Dried Purity</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Commercial brands use high-heat ovens. We use natural shade-drying to ensure that the vital nutrients and enzymes are never destroyed.</p>
                        </div>
                        <div className="reveal product-card" style={{ textAlign: 'center', border: 'none' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛡️</div>
                            <h4>Lab Tested in Habra</h4>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Every batch processed in our Habra unit is tested for purity. If it's not 100% organic, it doesn't leave our facility.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurStory;
