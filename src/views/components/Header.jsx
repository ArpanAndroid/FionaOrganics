import React from 'react';
import { navItems } from '../../models/data';

const Header = ({ isMenuOpen, toggleMenu }) => {
    return (
        <header>
            <div className="container">
                <a href="/">
                    <img src="/assets/images/logo.jpg" alt="Fiona Organics" className="logo-img" />
                </a>

                <div className="menu-toggle" onClick={toggleMenu}>☰</div>

                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
