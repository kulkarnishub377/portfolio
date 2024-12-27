import React from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
    return (
        <header className="sticky-header">
            <nav>
                <ul>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="certifications" smooth={true} duration={500}>Certifications</Link></li>
                    <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                    <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </nav>
            <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ↑
            </button>
        </header>
    );
};

export default Header;