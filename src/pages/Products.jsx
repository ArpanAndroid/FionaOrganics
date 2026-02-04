import { useState, useEffect } from 'react';

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            name: 'Pure Moringa Powder',
            description: 'The miracle tree leaf powder, rich in antioxidants and essential vitamins.',
            detailedDescription: 'Sourced from the heart of organic farms in West Bengal, our Moringa powder is processed at low temperatures to retain its maximum nutritional value. Often referred to as a superfood, it contains 7x more Vitamin C than oranges and 15x more potassium than bananas.',
            benefits: ['Boosts Immunity', 'Rich in Iron', 'Anti-inflammatory'],
            nutrition: [
                { label: 'Protein', value: '25%' },
                { label: 'Fiber', value: '19%' },
                { label: 'Vitamin A', value: 'High' }
            ],
            usage: 'Mix 1 teaspoon with warm water, juice, or smoothies daily.',
            status: 'Coming Soon',
            image: '/assets/images/moringa.png'
        },
        {
            name: 'Beetroot Extract',
            description: 'Natural heart health hero. Pure, vibrant, and packed with nitrates.',
            detailedDescription: 'Our Beetroot powder is a powerhouse of nitrates, which helps in improving blood flow and lowering blood pressure. It is excellent for athletes looking for a natural pre-workout boost or anyone seeking better cardiovascular health.',
            benefits: ['Blood Pressure Support', 'Energy Booster', 'Liver Detox'],
            nutrition: [
                { label: 'Nitrates', value: 'High' },
                { label: 'Folate', value: '20% DV' },
                { label: 'Manganese', value: '16% DV' }
            ],
            usage: 'Add to pre-workout drinks, baked goods, or morning oats.',
            status: 'Coming Soon',
            image: '/assets/images/beetroot.png'
        },
        {
            name: 'Root Ashwagandha',
            description: 'Premium adaptogen to help your body manage stress and boost vitality.',
            detailedDescription: 'Ashwagandha is one of the most important herbs in Ayurveda. Our root extract is standardized for maximum withanolide content, helping you stay grounded, sleep better, and improve cognitive clarity during stressful periods.',
            benefits: ['Stress Relief', 'Better Sleep', 'Brain Function'],
            nutrition: [
                { label: 'Adaptogens', value: 'High' },
                { label: 'Withanolides', value: '5%' },
                { label: 'Purity', value: '100%' }
            ],
            usage: 'Best taken with warm milk or honey before bedtime.',
            status: 'Coming Soon',
            image: '/assets/images/ashwagandha.png'
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openDetails = (product) => {
        setSelectedProduct(product);
        document.body.style.overflow = 'hidden';
    };

    const closeDetails = () => {
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="section container">
                <div className="reveal active" style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Signature Herbal Extracts</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginTop: '1rem' }}>Sourced from Villages, <br />Packaged for Purity.</h2>
                    <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>We are currently in final-stage manufacturing. Register for early access.</p>
                </div>

                <div className="product-grid">
                    {products.map((p, i) => (
                        <div key={i} className="reveal active product-card modern-card" onClick={() => openDetails(p)}>
                            <span className="badge">{p.status}</span>
                            <div className="product-card-img-container">
                                <img src={p.image} alt={p.name} className="product-img" />
                            </div>
                            <div className="product-card-info">
                                <h4>{p.name}</h4>
                                <p>{p.description}</p>
                                <div className="card-benefits">
                                    {p.benefits.slice(0, 2).map((b, idx) => (
                                        <span key={idx} className="benefit-tag">{b}</span>
                                    ))}
                                </div>
                                <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>View Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="modal-overlay" onClick={closeDetails}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeDetails}>&times;</button>
                        <div className="modal-body">
                            <div className="modal-image">
                                <img src={selectedProduct.image} alt={selectedProduct.name} />
                            </div>
                            <div className="modal-info">
                                <span className="badge">{selectedProduct.status}</span>
                                <h2>{selectedProduct.name}</h2>
                                <p className="modal-desc">{selectedProduct.detailedDescription}</p>

                                <div className="modal-stats">
                                    {selectedProduct.nutrition.map((item, idx) => (
                                        <div key={idx} className="stat-item">
                                            <span className="stat-label">{item.label}</span>
                                            <span className="stat-value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="modal-usage">
                                    <strong>How to use:</strong>
                                    <p>{selectedProduct.usage}</p>
                                </div>

                                <div className="modal-benefits">
                                    {selectedProduct.benefits.map((b, idx) => (
                                        <span key={idx} className="benefit-tag large">{b}</span>
                                    ))}
                                </div>

                                <button className="btn btn-primary" style={{ marginTop: '2rem', width: '100%' }}>Join Waitlist for Early Access</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <section className="section" style={{ background: 'var(--primary)', color: 'white', marginTop: '4rem' }}>
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
