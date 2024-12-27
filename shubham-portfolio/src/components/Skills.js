import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'Python', level: 90 },
        { name: 'C++', level: 80 },
        { name: 'MATLAB', level: 85 },
        { name: 'Flask', level: 75 },
        { name: 'Jupyter', level: 70 },
        { name: 'Pandas', level: 80 },
        { name: 'AI', level: 90 },
        { name: 'IoT', level: 85 },
        { name: 'Data Analytics', level: 90 },
    ];

    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <h3>{skill.name}</h3>
                        <div className="skill-bar">
                            <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                        </div>
                        <span>{skill.level}%</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;