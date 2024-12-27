import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: "AICTE",
            description: "AI-driven data analytics in agriculture and science.",
            achievements: [
                "Improved simulation accuracy by 20%."
            ]
        },
        {
            title: "IBM",
            description: "Gen AI prompt development and project leadership.",
            achievements: []
        },
        {
            title: "GeeksforGeeks",
            description: "Campus Ambassador and community engagement.",
            achievements: []
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <h2>Experience</h2>
            <div className="experience-timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3>{exp.title}</h3>
                        <p>{exp.description}</p>
                        {exp.achievements.length > 0 && (
                            <ul>
                                {exp.achievements.map((achievement, idx) => (
                                    <li key={idx}>{achievement}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;