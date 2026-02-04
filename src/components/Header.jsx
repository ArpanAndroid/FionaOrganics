import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    return (
        <header className={`${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo-container">
                    <img src="/assets/images/fiona-logo.jpg" alt="fiona-organics" className="logo-img" />
                </Link>

                <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link>
                    <Link to="/story" className={location.pathname === '/story' ? 'active-link' : ''}>Our Story</Link>
                    <Link to="/products" className={location.pathname === '/products' ? 'active-link' : ''}>Products</Link>
                    <Link to="/benefits" className={location.pathname === '/benefits' ? 'active-link' : ''}>Health Benefits</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact Us</Link>
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
    );
};

export default Header;
