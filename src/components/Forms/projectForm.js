import React, { useState } from 'react';
import {
  FormGroup, Form, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProject, updateProject } from '../../helpers/data/projectsData';

const ProjectForm = ({
  formTitle,
  projectID,
  projectName,
  gitHubLink,
  projectPicture,
  setProjects
}) => {
  const [project, setProject] = useState({
    projectID: projectID || null,
    projectName: projectName || '',
    gitHubLink: gitHubLink || '',
    projectPicture: projectPicture || ''
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.projectID) {
      updateProject(project).then((response) => setProjects(response));
    } else {
      addProject(project).then((response) => setProjects(response));

      setProject({
        projectName: '',
        gitHubLink: '',
        projectPicture: '',
        projectID: null
      });
    }
  };

  return (
    <>
    <div className='project-form'>
      <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label>Project&#39;s Name:</Label>
          <Input
            name='projectName'
            id='projectName'
            type='text'
            placeholder='Enter Project Name'
            value={project.projectName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Project GitHub Link:</Label>
          <Input
            name='gitHubLink'
            id='gitHubLink'
            type='text'
            placeholder='Enter the GitHub link'
            value={project.gitHubLink}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Project Picture link:</Label>
          <Input
            name='projectPicture'
            id='projectPicture'
            type='text'
            placeholder='Enter a Project picture link'
            value={project.projectPicture}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
    </>
  );
};

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  projectID: PropTypes.string,
  projectName: PropTypes.string,
  gitHubLink: PropTypes.string,
  projectPicture: PropTypes.string
};

export default ProjectForm;
