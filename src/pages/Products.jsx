import { useEffect } from 'react';

const Products = () => {
    const products = [
        {
            name: 'Pure Moringa Powder',
            description: 'The miracle tree leaf powder, rich in antioxidants and essential vitamins.',
            benefits: ['Boosts Immunity', 'Rich in Iron', 'Anti-inflammatory'],
            status: 'Coming Soon',
            image: '/assets/images/moringa.png'
        },
        {
            name: 'Beetroot Extract',
            description: 'Natural heart health hero. Pure, vibrant, and packed with nitrates.',
            benefits: ['Blood Pressure Support', 'Energy Booster', 'Liver Detox'],
            status: 'Coming Soon',
            image: '/assets/images/beetroot.png'
        },
        {
            name: 'Root Ashwagandha',
            description: 'Premium adaptogen to help your body manage stress and boost vitality.',
            benefits: ['Stress Relief', 'Better Sleep', 'Brain Function'],
            status: 'Coming Soon',
            image: '/assets/images/ashwagandha.png'
        }
    ];

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
                <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Signature Herbal Extracts</span>
                    <h2 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Sourced from Villages, <br />Packaged for Purity.</h2>
                    <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>We are currently in final-stage manufacturing. Register for early access.</p>
                </div>

                <div className="product-grid">
                    {products.map((p, i) => (
                        <div key={i} className="reveal product-card">
                            <span className="badge">{p.status}</span>
                            <img src={p.image} alt={p.name} />
                            <h4>{p.name}</h4>
                            <p>{p.description}</p>
                            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                                {p.benefits.map((b, idx) => (
                                    <span key={idx} style={{
                                        fontSize: '0.75rem',
                                        padding: '0.4rem 0.8rem',
                                        background: '#f0f4f1',
                                        color: 'var(--primary)',
                                        borderRadius: '50px',
                                        fontWeight: '500'
                                    }}>
                                        {b}
                                    </span>
                                ))}
                            </div>
                            <button className="btn btn-outline" style={{ marginTop: '2rem', width: '100%' }}>Waitlist Me</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginBottom: '2rem' }}>Bulk Inquiry for Wholesalers</h2>
                    <p style={{ opacity: '0.8', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Are you looking for premium, lab-tested organic powders for your business? We offer special pricing for bulk orders direct from our Habra unit.
                    </p>
                    <button className="btn btn-primary" style={{ background: 'var(--white)', color: 'var(--primary)' }}>Request Wholesaler Quote</button>
                </div>
            </section>
        </main>
    );
};

export default Products;
