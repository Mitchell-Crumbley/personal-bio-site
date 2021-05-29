import React from 'react';
import PropTypes from 'prop-types';
import ProjectForm from '../components/ProjectForm';

function AddProject({ setProjects, user }) {
  return (
    <div>
      <ProjectForm
        formTitle='Add Project'
        setProjects={setProjects}
        user={user}
      />
    </div>
  );
}

AddProject.propTypes = {
  setProjects: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddProject;
