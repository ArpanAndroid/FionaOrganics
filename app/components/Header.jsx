'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '../models/data';

const Header = ({ isMenuOpen, toggleMenu }) => {
    return (
        <header>
            <div className="container">
                <Link href="/" aria-label="Fiona Organics Home">
                    <Image 
                        src="/assets/images/logo.jpeg" 
                        alt="Fiona Organics" 
                        className="logo-img"
                        width={60}
                        height={60}
                        priority
                    />
                </Link>

                <button 
                    className="menu-toggle" 
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    ☰
                </button>

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
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
