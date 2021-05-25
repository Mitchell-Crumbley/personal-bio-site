import React from 'react';
import PropTypes from 'prop-types';
import ProjectCards from '../components/ProjectCards';

export default function ProjectView({
  projects, user, setProjects
}) {
  return (
    <div className="project-container">
      {projects.map((projectObj) => (
        <ProjectCards
          key={projectObj.firebaseKey}
          user={user}
          setProjects={setProjects}
          {...projectObj}
        />
      ))}
    </div>
  );
}

ProjectView.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func.isRequired,
  user: PropTypes.any,
};
