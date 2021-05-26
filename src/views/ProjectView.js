import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectCards from '../components/ProjectCards';
import ProjectForm from '../components/ProjectForm';
import { getProjects } from '../helpers/data/projectData';

export default function ProjectView({
  admin
}) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  return (
  <div id='projects'>
    <div>
    {
      admin && <ProjectForm setProjects={setProjects}/>
    }
    </div>
   <div className="project-container">
      {projects.map((projectObj) => (
        <ProjectCards
          key={projectObj.firebaseKey}
          admin={admin}
          setProjects={setProjects}
          {...projectObj}
        />
      ))}
    </div>
</div>
  );
}

ProjectView.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func.isRequired,
  admin: PropTypes.any,
};
