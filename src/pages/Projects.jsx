import React from 'react';
import Project from '../components/Project';

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/imgs/portfolio.png",
      githubLink: "https://github.com/lhapollo/lhapollo.github.io",
      liveLink: "https://lhapollo.github.io"
    }
    // Add more projects here
  ];

  return (
    <div id="project-body">
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects; 