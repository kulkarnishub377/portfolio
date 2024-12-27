import React from 'react';

function Experience() {
  const experiences = [
    {
      role: 'AICTE',
      description: 'AI-driven data analytics in agriculture and science.',
      achievements: ['Improved simulation accuracy by 20%.']
    },
    {
      role: 'IBM',
      description: 'Gen AI prompt development and project leadership.',
      achievements: ['Developed a mental health tracker with 90% accuracy.']
    },
    {
      role: 'GeeksforGeeks',
      description: 'Campus Ambassador and community engagement.',
      achievements: []
    }
  ];

  return (
    <section id="experience" className="experience bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="timeline">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item mb-8">
              <h3 className="text-xl font-bold mb-2">{experience.role}</h3>
              <p className="mb-2">{experience.description}</p>
              <ul className="list-disc list-inside">
                {experience.achievements.map((achievement, index) => (
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

export default Experience;
