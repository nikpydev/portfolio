import React from 'react';

function ProjectCard({
  cardHeader,
  projectName,
  projectDescription,
  cardFooter
}) {
  return (
    <div>
      <div className="project-card">
        <div className="project-card__header">{cardHeader}</div>

        <a
          href={`https://github.com/nikpydev/${projectName}`}
          className="github-project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require('../img/github-logo.png')}
            alt="github logo"
            className="project-card__github-logo-box"
          />
        </a>

        <a
          href={`https://nikpydev.github.io/${projectName}`}
          className="github-pages-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require('../img/web-host-logo.png')}
            alt="web logo"
            className="project-card__web-logo-box"
          />
        </a>

        <h1 className="project-card__name">{projectName}</h1>
        <figure className="project-card__image-container">
          <img
            src={require(`../img/${projectName}.png`)}
            alt="Tripster"
            className="project-card__image"
          />
        </figure>
        <h3 className="project-card__description">{projectDescription}</h3>
        <div className="project-card__footer">{cardFooter}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
