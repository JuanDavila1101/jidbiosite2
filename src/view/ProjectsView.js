import React from 'react';
import PropTypes from 'prop-types';
import ProjectCard from '../components/Pages/ProjectsCards';

function ProjectsView({ projects, setProjects }) {
  return (
    <>
    <div className="card-container">
    {projects.map((projectInformation) => (
      <ProjectCard
          key={projectInformation.projectID}
          projectID={projectInformation.projectID}
          projectName={projectInformation.projectName}
          gitHubLink={projectInformation.gitHubLink}
          projectPicture={projectInformation.projectPicture}
          setProjects={setProjects}
      />
    ))}
    </div>
    </>
  );
}

ProjectsView.propTypes = {
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};

export default ProjectsView;
