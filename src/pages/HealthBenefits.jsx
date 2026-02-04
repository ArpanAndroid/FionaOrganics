import { useState, useEffect } from 'react';

const HealthBenefits = () => {
    const [activeTab, setActiveTab] = useState('all');

    const categories = [
        { id: 'all', label: 'All Benefits' },
        { id: 'immunity', label: 'Immunity & Detox' },
        { id: 'physical', label: 'Physical Performance' },
        { id: 'mental', label: 'Mental Wellness' }
    ];

    const benefitsData = [
        {
            product: 'Pure Moringa Powder',
            category: 'immunity',
            title: 'The Immunity Shield',
            desc: 'Contains 7x more Vitamin C than oranges and 46 different antioxidants.',
            icon: '🛡️',
            details: 'Processed at low temperatures in Habra to ensure 100% nutrient retention.'
        },
        {
            product: 'Beetroot Extract',
            category: 'physical',
            title: 'Athletic Powerhouse',
            desc: 'Boosts Nitric Oxide levels, significantly improving oxygen flow.',
            icon: '⚡',
            details: 'Ideal for natural pre-workout routines and heart health.'
        },
        {
            product: 'Root Ashwagandha',
            category: 'mental',
            title: 'The Calm Adaptogen',
            desc: 'Clinically proven to reduce cortisol (stress hormone) by up to 30%.',
            icon: '🧘',
            details: 'Supports restorative sleep and stabilizes blood sugar levels.'
        },
        {
            product: 'Pure Moringa Powder',
            category: 'physical',
            title: 'Muscle Repair',
            desc: 'High protein content with all 9 essential amino acids.',
            icon: '💪',
            details: 'Rich in iron and potassium for optimal muscle recovery.'
        },
        {
            product: 'Beetroot Extract',
            category: 'immunity',
            title: 'Liver Detoxification',
            desc: 'Natural source of Betaine which prevents fatty acid buildup.',
            icon: '🌿',
            details: 'Flushes out toxins and supports a healthy gut microbiome.'
        },
        {
            product: 'Root Ashwagandha',
            category: 'physical',
            title: 'Stamina & Recovery',
            desc: 'Enhances muscle strength and reduces exercise-induced fatigue.',
            icon: '🏃',
            details: 'Balances thyroid health and hormonal production.'
        }
    ];

    const filteredBenefits = activeTab === 'all'
        ? benefitsData
        : benefitsData.filter(b => b.category === activeTab);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="section dark-section">
                <div className="container">
                    <div className="reveal active text-center" style={{ marginBottom: '4rem' }}>
                        <span className="accent-text">Scientific Foundation</span>
                        <h2 className="display-h2" style={{ color: 'white' }}>Nature's Intelligence, <br />Scientifically Proven.</h2>
                        <p className="body-text" style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
                            We bridge the gap between ancient herbal wisdom and modern wellness through lab-tested, additive-free manufacturing.
                        </p>
                    </div>

                    {/* Interactive Tabs */}
                    <div className="reveal active tabs-container">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="benefits-interactive-grid">
                        {filteredBenefits.map((benefit, i) => (
                            <div key={i} className="reveal active interactive-benefit-card">
                                <div className="benefit-icon-wrapper">{benefit.icon}</div>
                                <span className="benefit-product-label">{benefit.product}</span>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.desc}</p>
                                <div className="benefit-footer">
                                    <small>{benefit.details}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section container">
                <div className="synergy-grid">
                    <div className="reveal active">
                        <span className="accent-text">The Synergy Effect</span>
                        <h2 className="display-h2">Experience the Synergy</h2>
                        <p className="body-text">
                            While each product is powerful on its own, combining these powders creates a synergistic effect that boosts both physical energy and mental clarity.
                            <br /><br />
                            Eating organic is about more than just avoiding chemicals—it's about fueling your body with the clean, raw nutrients it was designed to thrive on. Our "Habra-Processed" methodology ensures you get the maximum bio-available nutrients in every scoop.
                        </p>
                        <div className="synergy-checklist">
                            <div className="check-item"><span>✓</span> 100% Bio-available Nutrients</div>
                            <div className="check-item"><span>✓</span> Zero High-Heat Processing</div>
                            <div className="check-item"><span>✓</span> Lab Tested for Pesticides</div>
                        </div>
                    </div>
                    <div className="reveal active synergy-image-wrapper">
                        <img src="/assets/images/fiona-logo.jpg" className="synergy-img" alt="organic synergy" />
                        <div className="synergy-floating-badge">
                            <strong>Pure</strong>
                            <span>Quality Guaranteed</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HealthBenefits;
