import React from 'react';

function Certifications() {
  const certifications = [
    {
      title: 'AI for MATLAB',
      organization: 'MathWorks',
      date: '2023'
    },
    {
      title: 'Statistics Onramp',
      organization: 'ISRO',
      date: '2022'
    },
    {
      title: 'Career Essentials in Generative AI',
      organization: 'Microsoft',
      date: '2023'
    }
  ];

  return (
    <section id="certifications" className="certifications bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification, index) => (
            <div key={index} className="certification-card bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">{certification.title}</h3>
              <p className="mb-2">{certification.organization}</p>
              <p className="text-gray-600">{certification.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
