import React from 'react';

function Skills() {
  const skills = [
    { category: 'Programming', skills: ['Python', 'C++', 'MATLAB'] },
    { category: 'Tools', skills: ['Flask', 'Jupyter', 'Pandas'] },
    { category: 'Domains', skills: ['AI', 'IoT', 'Data Analytics'] }
  ];

  return (
    <section id="skills" className="skills bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">{skillCategory.category}</h3>
              <ul className="list-disc list-inside">
                {skillCategory.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
