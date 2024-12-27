import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Mental Health Fitness Tracker',
      description: 'AI-powered solution with 90% accuracy.',
      techStack: ['Python', 'Flask', 'TensorFlow'],
      link: 'https://github.com/shubhamkulkarni/mental-health-fitness-tracker'
    },
    {
      title: 'PICsimlab Washing Machine Simulation',
      description: 'Improved modularity by 20%.',
      techStack: ['C++', 'PICsimlab'],
      link: 'https://github.com/shubhamkulkarni/picsimlab-washing-machine'
    },
    {
      title: 'Alumni Management Portal',
      description: 'Designed a secure and scalable backend.',
      techStack: ['Node.js', 'Express', 'MongoDB'],
      link: 'https://github.com/shubhamkulkarni/alumni-management-portal'
    }
  ];

  return (
    <section id="projects" className="projects bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="tech-stack mb-4">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-icon mr-2">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="text-blue-500 hover:underline">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
