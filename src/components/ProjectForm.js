import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createProjects, updateProjects } from '../helpers/data/projectData';

const ProjectForm = ({
  formTitle,
  firebaseKey,
  projectName,
  projectDescription,
  deployLink,
  gitHubLink,
  setProjects
}) => {
  const [project, setProject] = useState({
    projectName: projectName || '',
    projectDescription: projectDescription || '',
    deployLink: deployLink || '',
    id: firebaseKey || null,
    gitHubLink: gitHubLink || '',
  });

  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProjects(project).then(setProjects);
    } else {
      createProjects(project).then(setProjects);
      history.push('/projects');

      // clear inputs
      setProject({
        projectName: '',
        projectDescription: '',
        deployLink: '',
        gitHubLink: '',
        firebaseKey: null,
        uid: null,
      });
    }
  };

  return (
  <div className='project-form'>
  <Card body>
    <Form id='addProjectForm' autoComplete='off' onSubmit={handleSubmit}>
      <h2>{formTitle}</h2>
      <FormGroup>
        <Label for="projectName">Name:</Label>
        <Input
          name='projectName'
          id='projectName'
          value={project.projectName}
          type='text'
          placeholder='Enter a Project Name'
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="projectDescription">Description:</Label>
        <Input
          name='projectDescription'
          id='projectDescription'
          value={project.projectDescription}
          type='text'
          placeholder='Enter a Board Description'
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="projectImage">Image:</Label>
        <Input
          name='projectImage'
          id='projectImage'
          value={project.projectImage}
          type='text'
          placeholder='Enter an Image URL'
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="deploy">Deploy Link:</Label>
        <Input
          name='deployLink'
          id='deployLink'
          value={project.deployLink}
          type='url'
          placeholder='Enter an Deploy URL'
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="gitHub">GitHub Link:</Label>
        <Input
          name='gitHubLink'
          id='gitHubLink'
          value={project.gitHubLink}
          type='url'
          placeholder='Enter an GitHub URL'
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </Form>
    </Card>
  </div>
  );
};

ProjectForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setProjects: PropTypes.func,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  deployLink: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  gitHubLink: PropTypes.string,
  className: PropTypes.string
};

export default ProjectForm;
