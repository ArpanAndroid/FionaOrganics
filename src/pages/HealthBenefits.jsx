import { useEffect } from 'react';

const HealthBenefits = () => {
    const products = [
        {
            name: 'Pure Moringa Powder',
            description: 'The miracle tree leaf powder, rich in antioxidants and essential vitamins.',
            benefits: ['Boosts Immunity', 'Rich in Iron', 'Anti-inflammatory'],
            pointDetails: [
                'Contains 7x more Vitamin C than oranges to shield your immune system.',
                '15x more Potassium than bananas for optimal heart and muscle function.',
                'High concentration of Chromium helps in regulating blood sugar levels.',
                'Rich in Vitamin A, supporting healthy vision and radiant skin.',
                'Natural detoxifier that helps flush out toxins from the liver and kidneys.',
                'Contains 46 different types of antioxidants to combat cellular aging.',
                'High protein content with all 9 essential amino acids for muscle repair.',
                'Naturally boosts breast milk production in nursing mothers.',
                'Helps reduce chronic inflammation and joint pain effectively.'
            ]
        },
        {
            name: 'Beetroot Extract',
            description: 'Natural heart health hero. Pure, vibrant, and packed with nitrates.',
            benefits: ['Blood Pressure Support', 'Energy Booster', 'Liver Detox'],
            pointDetails: [
                'Boosts Nitric Oxide levels, significantly improving athletic performance and oxygen flow.',
                'Natural source of Betaine which prevents fatty acid buildup in the liver.',
                'Improves blood flow to the brain, enhancing cognitive focus and delaying dementia.',
                'Contains powerful Betalains which are potent anti-inflammatory and detox agents.',
                'High fiber content supports better digestion and a healthy gut microbiome.',
                'Rich in Folate (B9) which is crucial for healthy cell growth and function.',
                'Contains Boron, which is related to the production of human sex hormones.',
                'Helps in lowering LDL (bad) cholesterol levels naturally.',
                'Reduces the workload on the heart by relaxing blood vessel walls.'
            ]
        },
        {
            name: 'Root Ashwagandha',
            description: 'Premium adaptogen to help your body manage stress and boost vitality.',
            benefits: ['Stress Relief', 'Better Sleep', 'Brain Function'],
            pointDetails: [
                'Clinically proven to reduce cortisol levels (the stress hormone) by up to 30%.',
                'Enhances muscle strength and recovery after intense physical workouts.',
                'Supports natural testosterone levels and improves reproductive health.',
                'Significantly improves memory, task performance, and cognitive reaction time.',
                'Acts as a natural sedative to ensure deep, restorative REM sleep cycles.',
                'Helps stabilize blood sugar levels by improving insulin sensitivity.',
                'Boosts the activity of immune cells that fight infection.',
                'Supports thyroid health by balancing hormone production.',
                'Reduces anxiety symptoms and promotes a calm, centered state of mind.'
            ]
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
            <section className="section" style={{ background: '#112211', color: 'white' }}>
                <div className="container">
                    <div className="reveal" style={{ textAlign: 'center', marginBottom: '6rem' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Scientific Foundation</span>
                        <h2 style={{ fontSize: '3.5rem', marginTop: '1rem', color: 'white' }}>How It Benefits You</h2>
                        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '1.5rem auto' }}>
                            We don't just sell powders; we sell concentrated health. Our shade-drying process and zero-additive policy ensure the nutrients stay alive.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        {products.map((p, i) => (
                            <div key={i} className="reveal benefit-card" style={{
                                padding: '3rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '32px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                height: '100%'
                            }}>
                                <h4 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>{p.name}</h4>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                                    {p.pointDetails.map((point, idx) => (
                                        <li key={idx} style={{
                                            display: 'flex',
                                            gap: '1rem',
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            opacity: '0.9'
                                        }}>
                                            <span style={{ color: 'var(--accent)', fontSize: '1.2rem', flexShrink: 0 }}>✦</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
                    <div className="reveal">
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Experience the Synergy</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            While each product is powerful on its own, many of our customers find that combining these powders creates a synergistic effect that boosts both physical energy and mental clarity.
                            <br /><br />
                            Eating organic is about more than just avoiding chemicals—it's about fueling your body with the clean, raw nutrients it was designed to thrive on.
                        </p>
                    </div>
                    <div className="reveal">
                        <img src="/assets/images/hero-bg.png" style={{ width: '100%', borderRadius: '40px', boxShadow: 'var(--shadow)' }} alt="organic synergy" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HealthBenefits;
