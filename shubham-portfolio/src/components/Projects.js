import React from 'react';

const projects = [
    {
        title: "Mental Health Fitness Tracker",
        description: "AI-powered solution with 90% accuracy.",
        techStack: ["Python", "Flask", "TensorFlow"],
        link: "https://github.com/yourusername/mental-health-fitness-tracker"
    },
    {
        title: "PICsimlab Washing Machine Simulation",
        description: "Improved modularity by 20%.",
        techStack: ["MATLAB", "Simulink"],
        link: "https://github.com/yourusername/picsimlab-washing-machine"
    },
    {
        title: "Alumni Management Portal",
        description: "Designed a secure and scalable backend.",
        techStack: ["Node.js", "Express", "MongoDB"],
        link: "https://github.com/yourusername/alumni-management-portal"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;