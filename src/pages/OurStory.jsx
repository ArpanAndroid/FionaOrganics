import { useEffect } from 'react';

const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const timeline = [
        {
            year: 'Early 2023',
            title: 'The Vision',
            desc: 'Realized the gap between urban "organic" claims and actual rural purity during visits to local West Bengal villages.'
        },
        {
            year: 'Late 2023',
            title: 'Sourcing Network',
            desc: 'Built direct relationships with over 50 small-scale farmers in 20+ villages across the state.'
        },
        {
            year: 'Early 2024',
            title: 'Habra Unit Launch',
            desc: 'Established our state-of-the-art manufacturing facility in Habra to process herbs without high heat.'
        },
        {
            year: 'Present',
            title: 'Global Purity',
            desc: 'Bringing 100% natural, additive-free herbal powders to health-conscious individuals everywhere.'
        }
    ];

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="section container">
                <div className="story-grid">
                    <div className="reveal active story-image-wrapper">
                        <img src="/assets/images/fiona-logo.jpg" className="story-main-img" alt="village roots" />
                        <div className="story-stat-box">
                            <h4>100%</h4>
                            <p>Direct Village Collection</p>
                        </div>
                    </div>
                    <div className="reveal active story-content">
                        <span className="accent-text">Our Roots</span>
                        <h2 className="display-h2">A Journey from the <br />Village to Your Soul.</h2>
                        <p className="lead-text">
                            The Fiona Organics story didn't begin in a boardroom; it began in the lush, green fields of rural West Bengal.
                        </p>
                        <p className="body-text">
                            Growing up in the village, we saw the incredible power of natural herbs used in every household. However, we also noticed that by the time these herbs reached the cities, they lost their purity through long supply chains and additives.
                            <br /><br />
                            In 2024, we started our manufacturing journey in **Habra** with a single mission: to collect the finest produce directly from our village farmers and process them with zero compromises. Every jar of Fiona Organics is a tribute to our village roots.
                        </p>
                        <div className="story-quick-stats">
                            <div className="quick-stat">
                                <h6>Habra, WB</h6>
                                <p>Manufacturing Hub</p>
                            </div>
                            <div className="quick-stat">
                                <h6>20+ Villages</h6>
                                <p>Direct Sourcing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section bg-light-green">
                <div className="container">
                    <div className="reveal active text-center" style={{ marginBottom: '5rem' }}>
                        <span className="accent-text">Our Journey</span>
                        <h2 className="display-h2">The Path of Purity</h2>
                    </div>

                    <div className="timeline-container">
                        {timeline.map((item, i) => (
                            <div key={i} className="timeline-item reveal active">
                                <div className="timeline-dot"></div>
                                <div className="timeline-date">{item.year}</div>
                                <div className="timeline-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="reveal active text-center" style={{ marginBottom: '5rem' }}>
                        <h2 className="display-h2">Why We Stand Out</h2>
                        <p className="body-text">We bridge the gap between rural purity and modern wellness.</p>
                    </div>

                    <div className="feature-grid">
                        <div className="reveal active feature-card">
                            <div className="feature-icon">🏠</div>
                            <h4>Direct Village Collection</h4>
                            <p className="feature-desc">We eliminate middlemen. Our experts travel to collection villages to inspect and hand-pick the raw materials directly from the source.</p>
                        </div>
                        <div className="reveal active feature-card">
                            <div className="feature-icon">☀️</div>
                            <h4>Shade-Dried Purity</h4>
                            <p className="feature-desc">Commercial brands use high-heat ovens. We use natural shade-drying to ensure that the vital nutrients and enzymes are never destroyed.</p>
                        </div>
                        <div className="reveal active feature-card">
                            <div className="feature-icon">🛡️</div>
                            <h4>Lab Tested in Habra</h4>
                            <p className="feature-desc">Every batch processed in our Habra unit is tested for purity. If it's not 100% organic, it doesn't leave our facility.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurStory;
