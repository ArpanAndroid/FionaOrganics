import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', background: '#112211', color: 'var(--white)', textAlign: 'center' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <Link to="/" className="logo-container" style={{ background: 'white', padding: '0.8rem 1.5rem' }}>
                        <img src="/assets/images/fiona-logo.jpg" alt="fiona-organics" className="logo-img" />
                    </Link>
                </div>
                <p style={{ opacity: '0.7', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    Nurturing your health with the purity of nature. Directly from the villages of West Bengal to your doorstep.
                </p>
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
    );
};

export default Footer;
