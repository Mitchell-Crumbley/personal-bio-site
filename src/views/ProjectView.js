import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectCards from '../components/ProjectCards';
import ProjectForm from '../components/ProjectForm';
import { getProjects } from '../helpers/data/projectData';

const projStyle = {
  textAlign: 'center',
  color: 'white',
  textShadow: '2px 2px black',
};

export default function ProjectView({
  admin
}) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  return (
  <div style={projStyle} id='projects'>
    <h1>Past Work</h1>
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
