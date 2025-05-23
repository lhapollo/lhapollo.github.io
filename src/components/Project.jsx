import React from 'react';

function Project({ title, image, githubLink, liveLink }) {
  return (
    <div className="project-container">
      <h2 className="project-title">{title}</h2>
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
      </div>
      <div className="project-link-container">
        <ul>
          {githubLink && (
            <li>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
          )}
          {liveLink && (
            <li>
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Project; 