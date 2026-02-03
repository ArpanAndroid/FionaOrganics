'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer style={{
            padding: '80px 0 40px',
            background: '#fff',
            borderTop: '1px solid rgba(26, 77, 46, 0.05)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    marginBottom: '60px',
                    textAlign: 'left'
                }}>
                    {/* Brand Column */}
                    <div>
                        <h3 style={{
                            fontFamily: 'Playfair Display, serif',
                            fontSize: '1.8rem',
                            color: 'var(--primary-color)',
                            marginBottom: '1.5rem'
                        }}>Fiona Organics</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            Dedicated to providing the purest organic superfoods.
                            Hand-soured, stone-ground, and packed with love from West Bengal.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><a href="/" style={{ color: 'var(--text-secondary)' }}>Home</a></li>
                            <li><a href="#products" style={{ color: 'var(--text-secondary)' }}>Our Products</a></li>
                            <li><a href="#process" style={{ color: 'var(--text-secondary)' }}>Our Process</a></li>
                            <li><a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
                            <a href="#" style={{ color: 'var(--primary-color)' }}>📸</a>
                            <a href="#" style={{ color: 'var(--primary-color)' }}>📘</a>
                            <a href="#" style={{ color: 'var(--primary-color)' }}>🐦</a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(26, 77, 46, 0.05)',
                    paddingTop: '30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Fiona Organics. Nature's Purest Essence.</p>
                    <p>Designed with passion for a healthier lifestyle.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
