import { useEffect } from 'react';

const OurStory = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main style={{ paddingTop: '100px' }}>
            <section className="section container">
                <div className="story-grid">
                    <div className="reveal active story-image-wrapper">
                        <img src="/assets/images/fiona-logo.jpg" className="story-main-img" alt="village roots" />
                    </div>
                    <div className="reveal active story-content">
                        <span className="accent-text">The Beginning</span>
                        <h2 className="display-h2">A Vision Rooted in <br />Purity and Purpose.</h2>
                        <p className="lead-text">
                            Fiona Organics is a startup born in the lush, green fields of rural West Bengal, driven by a simple mission: to bring nature's raw power to the world.
                        </p>
                        <p className="body-text">
                            We observed that pure village herbs often lose their soul by the time they reach urban households. Supply chains, high-heat processing, and additives strip away the very essence of wellness.
                            <br /><br />
                            Currently, we are in the **startup phase**, building our foundation in **Habra**. We are not just creating products; we are crafting a transparent sourcing and manufacturing process that respects both the farmer and the consumer. We haven't launched for sales yet—we are busy ensuring that when we do, every jar is purity guaranteed.
                        </p>
                        <div className="story-quick-stats">
                            <div className="quick-stat">
                                <h6>Habra, WB</h6>
                                <p>Startup Base</p>
                            </div>
                            <div className="quick-stat">
                                <h6>Pre-Launch</h6>
                                <p>Preparation Phase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-light-green">
                <div className="container">
                    <div className="reveal active text-center" style={{ marginBottom: '5rem' }}>
                        <span className="accent-text">Our Philosophy</span>
                        <h2 className="display-h2">Building the Foundation</h2>
                        <p className="body-text" style={{ maxWidth: '800px', margin: '0 auto' }}>
                            We are taking the time to do things the right way. Before our first product reaches you, we are perfecting the "Purity Standard" that defines Fiona Organics.
                        </p>
                    </div>

                    <div className="feature-grid">
                        <div className="reveal active feature-card">
                            <div className="feature-icon">🏠</div>
                            <h4>Ethical Sourcing</h4>
                            <p className="feature-desc">Developing direct networks with village farmers to ensure fair trade and the highest quality raw materials from the very start.</p>
                        </div>
                        <div className="reveal active feature-card">
                            <div className="feature-icon">☀️</div>
                            <h4>Natural Drying</h4>
                            <p className="feature-desc">Setting up shade-drying protocols to preserve delicate nutrients that commercial high-heat methods typically destroy.</p>
                        </div>
                        <div className="reveal active feature-card">
                            <div className="feature-icon">🛡️</div>
                            <h4>Lab-First Approach</h4>
                            <p className="feature-desc">Our Habra facility is being designed with testing at its core. If it's not purely natural, it won't be part of our story.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurStory;
