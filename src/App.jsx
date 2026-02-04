import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        'Natural detoxifier that helps flush out toxins from the liver.'
      ],
      status: 'Coming Soon',
      image: '/assets/images/moringa.png'
    },
    {
      name: 'Beetroot Extract',
      description: 'Natural heart health hero. Pure, vibrant, and packed with nitrates.',
      benefits: ['Blood Pressure Support', 'Energy Booster', 'Liver Detox'],
      pointDetails: [
        'Boosts Nitric Oxide levels, significantly improving athletic performance.',
        'Natural source of Betaine which supports healthy liver function.',
        'Improves blood flow to the brain, enhancing cognitive focus.',
        'Contains powerful Betalains which have potent anti-inflammatory properties.',
        'High fiber content supports better digestion and weight management.'
      ],
      status: 'Coming Soon',
      image: '/assets/images/beetroot.png'
    },
    {
      name: 'Root Ashwagandha',
      description: 'Premium adaptogen to help your body manage stress and boost vitality.',
      benefits: ['Stress Relief', 'Better Sleep', 'Brain Function'],
      pointDetails: [
        'Clinically proven to reduce cortisol levels (the stress hormone).',
        'Enhances muscle strength and recovery after intense workouts.',
        'Supports natural testosterone levels and overall hormonal balance.',
        'Improves memory and cognitive reaction time.',
        'Acts as a natural sedative to ensure deep, restorative sleep cycles.'
      ],
      status: 'Coming Soon',
      image: '/assets/images/ashwagandha.png'
    }
  ];

  return (
    <>
      <header className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="logo-container">
            <img src="/assets/images/fiona-logo.jpg" alt="fiona-organics" className="logo-img" />
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#story" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)}>Health Benefits</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <button className="btn btn-primary mobile-only" style={{ marginTop: '2rem' }}>Get Updates</button>
          </nav>

          <div className="header-actions">
            <button className="btn btn-outline desktop-only" style={{ padding: '0.6rem 1.5rem' }}>Get Updates</button>
            <button
              className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="container" style={{ position: 'relative', zIndex: '5' }}>
            <div className="hero-content">
              <h1 style={{ marginTop: '1rem' }}>Pure Nature, <br />Crafted for Wellness.</h1>
              <p>Experience the finest organic powders manufactured with traditional wisdom and modern precision in Habra. 100% natural, locally sourced, and powerful.</p>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <a href="#products" className="btn btn-primary">View Products</a>
                <a href="#story" className="btn btn-outline">Our Story</a>
              </div>
            </div>
          </div>
          <div className="hero-image" style={{ borderRadius: '0 0 0 100px' }}></div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="section" style={{ backgroundColor: 'var(--white)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '5rem', alignItems: 'center' }}>
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
                  The Fiona Organics story didn't begin in a boardroom; it began in the lush, green fields of rural West Bengal.
                </p>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                  Growing up in the village, we saw the incredible power of natural herbs used in every household. However, we also noticed that by the time these herbs reached the cities, they lost their purity through long supply chains and additives.
                  <br /><br />
                  In 2024, we started our manufacturing journey in **Habra** with a single mission: to collect the finest produce directly from our village farmers and process them with zero compromises. Every jar of Fiona Organics is a tribute to our village roots.
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
          </div>
        </section>

        {/* Why Choose Our Brand Section */}
        <section id="about" className="section container" style={{ borderTop: '1px solid #eee' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem' }}>Why Choose Our Brand?</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '1rem auto 0' }}>We bridge the gap between rural purity and modern wellness.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            <div className="reveal product-card" style={{ textAlign: 'center', border: 'none' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏠</div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Direct Village Collection</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>We eliminate middlemen. Our experts travel to collection villages to inspect and hand-pick the raw materials directly from the source.</p>
            </div>
            <div className="reveal product-card" style={{ textAlign: 'center', border: 'none' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>☀️</div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Shade-Dried Purity</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Commercial brands use high-heat ovens. We use natural shade-drying to ensure that the vital nutrients and enzymes are never destroyed.</p>
            </div>
            <div className="reveal product-card" style={{ textAlign: 'center', border: 'none' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🛡️</div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>Lab Tested in Habra</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Every batch processed in our Habra unit is tested for purity. If it's not 100% organic, it doesn't leave our facility.</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="section container">
          <div className="reveal">
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem' }}>Our Signature Herbal Extracts</h2>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem' }}>
              Potent, pure, and premium. Discover the life-changing power of organic botanicals.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product, idx) => (
              <div key={idx} className="product-card reveal">
                <div style={{ position: 'relative' }}>
                  <img src={product.image} alt={product.name} className="product-img" />
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '0.3rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {product.status}
                  </span>
                </div>
                <h3>{product.name}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>{product.description}</p>
                <div style={{ background: '#f8f9f8', padding: '1rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                  <h6 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: 'var(--primary)' }}>Key Benefits:</h6>
                  <ul style={{ margin: 0 }}>
                    {product.benefits.map((benefit, i) => (
                      <li key={i} style={{ fontSize: '0.85rem', display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--text-dark)', marginBottom: '0.3rem' }}>
                        <span style={{ color: 'var(--accent)' }}>✔</span> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-outline" style={{ width: '100%', padding: '0.8rem' }}>Learn More</button>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Health Benefits Section */}
        <section id="benefits" className="section" style={{ backgroundColor: '#1a4d2e', color: 'white' }}>
          <div className="container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '5rem' }}>
              <h2 style={{ fontSize: '3rem', color: 'white' }}>How It Benefits You</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Deep dive into the health science of our manufactured products.</p>
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

        {/* Contact Section */}
        <section id="contact" className="section container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div className="reveal">
              <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Connect With Your <br />Manufacturer.</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(26, 77, 46, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}>📍</div>
                  <div>
                    <h5 style={{ fontWeight: '600' }}>Manufacturing Unit Address</h5>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Habra, West Bengal, India - 743263</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(26, 77, 46, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}>📞</div>
                  <div>
                    <h5 style={{ fontWeight: '600' }}>Direct Helpline No.</h5>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+91 8900686683</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(26, 77, 46, 0.1)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--primary)' }}>📧</div>
                  <div>
                    <h5 style={{ fontWeight: '600' }}>Official Email</h5>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>test@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal" style={{ background: 'var(--white)', padding: '3rem', borderRadius: '32px', boxShadow: 'var(--shadow)' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 style={{ marginBottom: '1rem' }}>Get in Touch</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Full Name</label>
                  <input type="text" placeholder="Your Name" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                  <input type="email" placeholder="your@email.com" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Inquiry Message</label>
                  <textarea rows="4" placeholder="How can we help your health journey?" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee', outline: 'none', resize: 'none' }}></textarea>
                </div>
                <button type="button" className="btn btn-primary">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '4rem 0', background: '#112211', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <div className="logo-container" style={{ marginBottom: '1.5rem', background: 'white', padding: '0.8rem 1.5rem' }}>
            <img src="/assets/images/fiona-logo.jpg" alt="fiona-organics" className="logo-img" />
          </div>
          <p style={{ opacity: '0.7', marginBottom: '2rem' }}>Nurturing your health with the purity of nature.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            <a href="#" style={{ opacity: '0.8' }}>Instagram</a>
            <a href="#" style={{ opacity: '0.8' }}>Facebook</a>
            <a href="#" style={{ opacity: '0.8' }}>Twitter</a>
            <a href="#" style={{ opacity: '0.8' }}>LinkedIn</a>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', fontSize: '0.8rem', opacity: '0.5' }}>
            © {new Date().getFullYear()} fiona-organics. West Bengal - 743263. Made with Purity.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
