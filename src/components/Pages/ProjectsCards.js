import React, { useState } from 'react';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProject } from '../../helpers/data/projectsData';
import ProjectForm from '../Forms/projectForm';

const ProjectCard = ({
  projectID,
  projectName,
  gitHubLink,
  projectPicture,
  setProjects
}) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProject(projectID).then((projectArray) => setProjects(projectArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle tag="h5">Project Name: {projectName}</CardTitle>
        </CardBody>
        <img width="100%" src={projectPicture} alt="Project image" />
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">GitHub link: {gitHubLink}</CardSubtitle>
          <CardText></CardText>
          <Button color="info" onClick={() => handleClick('view')}>View Project</Button>
          <Button color="success" onClick={() => handleClick('edit')}>
            {editing ? 'Close Form' : 'Edit Project' }
          </Button>
          <hr />
          <Button color="danger" onClick={() => handleClick('delete')}>Delete Project</Button>
      {editing && <ProjectForm
         formTitle='Edit project'
         setProjects={setProjects}
         projectID={projectID}
         projectName={projectName}
         gitHubLink={gitHubLink}
         projectPicture={projectPicture}
       />}
      </CardBody>
    </Card>
  );
};

ProjectCard.propTypes = {
  projectID: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired,
  projectPicture: PropTypes.string.isRequired,
  setProjects: PropTypes.func
};

export default ProjectCard;
