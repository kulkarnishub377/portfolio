import React from 'react';
import './Hero.css'; // Assuming you will create a Hero.css for specific styles

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <img src="/path/to/profile-photo.jpg" alt="Shubham Kulkarni" className="profile-photo" />
                <h1>Shubham Kulkarni</h1>
                <p className="tagline">AI, IoT & Data Analytics Specialist | SIH23 Runner-up</p>
                <p className="bio">
                    With expertise in AI, IoT, and Data Analytics, I deliver innovative solutions. Explore my portfolio to discover award-winning projects and impactful contributions.
                </p>
                <div className="cta-buttons">
                    <a href="/path/to/resume.pdf" className="btn">Download Resume</a>
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" className="btn">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;