import React from 'react';

function Hero() {
  return (
    <section className="hero bg-gray-900 text-white text-center py-20">
      <div className="container mx-auto">
        <img src="/path/to/profile-photo.jpg" alt="Shubham Kulkarni" className="mx-auto rounded-full shadow-lg" />
        <h1 className="text-4xl font-bold mt-4">Shubham Kulkarni</h1>
        <p className="text-xl mt-2">AI, IoT & Data Analytics Specialist | SIH23 Runner-up</p>
        <p className="mt-4">With expertise in AI, IoT, and Data Analytics, I deliver innovative solutions. Explore my portfolio to discover award-winning projects and impactful contributions.</p>
        <div className="mt-6">
          <a href="/path/to/resume.pdf" className="btn btn-primary mr-4">Download Resume</a>
          <a href="#projects" className="btn btn-secondary mr-4">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
