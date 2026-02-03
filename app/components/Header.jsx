'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '../models/data';

const Header = ({ isMenuOpen, toggleMenu }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={scrolled ? 'scrolled' : ''}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" aria-label="Fiona Organics Home" className="logo">
                    <Image
                        src="/assets/images/logo.jpeg"
                        alt="Fiona Organics"
                        className="logo-img"
                        width={60}
                        height={60}
                        priority
                        style={{ borderRadius: '12px' }}
                    />
                    <span style={{
                        marginLeft: '15px',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        fontFamily: 'Playfair Display, serif',
                        color: 'var(--primary-color)',
                        letterSpacing: '0.5px'
                    }}>FIONA <span style={{ fontWeight: '400', color: 'var(--primary-light)' }}>ORGANICS</span></span>
                </Link>

                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                {item.link.startsWith('#') ? (
                                    <a href={item.link} onClick={() => isMenuOpen && toggleMenu()}>
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link href={item.link} onClick={() => isMenuOpen && toggleMenu()}>
                                        {item.name}
                                    </Link>
                                ) || item.name}
                            </li>
                        ))}
                        <li>
                            <button
                                className="btn btn-primary"
                                style={{ padding: '10px 25px', fontSize: '0.8rem' }}
                                onClick={() => {
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                    if (isMenuOpen) toggleMenu();
                                }}
                            >
                                Get Started
                            </button>
                        </li>
                    </ul>
                </nav>

                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    style={{ background: 'none', border: 'none', fontSize: '2rem' }}
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
        </header>
    );
};

export default Header;
