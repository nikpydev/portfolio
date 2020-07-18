import React from "react";

function ProjectCard({
  cardHeader,
  projectName,
  imageUrl,
  projectDescription,
  cardFooter,
}) {
  return (
    <div>
      <div className="project-card">
        <div className="project-card__header">{cardHeader}</div>
        
        <a
          href="https://github.com/nikpydev/Tripster-Frontend"
          className="github-project-link"
        >
          <img
            src="./github-logo.png"
            alt="github logo"
            className="project-card__github-logo-box"
          />
        </a>
        
        <h1 className="project-card__name">{projectName}</h1>
        <figure className="project-card__image-container">
          <img src={imageUrl} alt="Tripster" className="project-card__image" />
        </figure>
        <h3 className="project-card__description">{projectDescription}</h3>
        <div className="project-card__footer">{cardFooter}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
