import React from 'react';

function Education() {
  const education = [
    {
      institution: 'Savitribai Phule Pune University',
      degree: 'Bachelor of Engineering (B.E.), Electronics & Telecommunication',
      period: '2021–2025',
      subjects: 'IoT, Embedded Systems, Data Analytics',
      achievements: ['Led the team to AIR 1 at Smart India Hackathon 2023.', 'Recipient of 2 government training programs in Innovation & Design.']
    },
    {
      institution: 'Residential Arts, Commerce, and Science Junior College',
      degree: 'Higher Secondary Certificate (HSC), Science Stream',
      period: '2019–2021',
      subjects: '',
      achievements: []
    }
  ];

  return (
    <section id="education" className="education bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item mb-8">
              <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
              <p className="mb-2">{edu.degree}</p>
              <p className="text-gray-600 mb-2">{edu.period}</p>
              {edu.subjects && <p className="mb-2">Key Subjects: {edu.subjects}</p>}
              <ul className="list-disc list-inside">
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
