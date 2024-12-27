import React from 'react';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="education-timeline">
                <div className="education-item">
                    <h3>Savitribai Phule Pune University</h3>
                    <p>Bachelor of Engineering (B.E.), Electronics & Telecommunication</p>
                    <p>2021–2025</p>
                    <p>Key Subjects: IoT, Embedded Systems, Data Analytics</p>
                    <p>Notable Achievements: Led the team to AIR 1 at Smart India Hackathon 2023</p>
                </div>
                <div className="education-item">
                    <h3>Residential Arts, Commerce, and Science Junior College</h3>
                    <p>Higher Secondary Certificate (HSC), Science Stream</p>
                    <p>2019–2021</p>
                </div>
            </div>
        </section>
    );
};

export default Education;