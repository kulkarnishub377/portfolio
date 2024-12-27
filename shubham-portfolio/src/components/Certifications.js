import React from 'react';

const certifications = [
    {
        title: 'AI for MATLAB',
        organization: 'MathWorks',
        date: '2023',
    },
    {
        title: 'Statistics Onramp',
        organization: 'ISRO',
        date: '2023',
    },
    {
        title: 'Career Essentials in Generative AI',
        organization: 'Microsoft',
        date: '2023',
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="certifications">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <h3>{cert.title}</h3>
                        <p>{cert.organization}</p>
                        <p>{cert.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;