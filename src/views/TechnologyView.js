import React from 'react';
import PropTypes from 'prop-types';
import TechnologyCards from '../components/TechnologyCards';

export default function TechnologyView({
  technologies, user, setTechnologies
}) {
  return (
    <div className="technology-container">
      {technologies.map((technologyObj) => (
        <TechnologyCards
          key={technologyObj.firebaseKey}
          user={user}
          setTechnologies={setTechnologies}
          {...technologyObj}
        />
      ))}
    </div>
  );
}

TechnologyView.propTypes = {
  technologies: PropTypes.array,
  setTechnologies: PropTypes.func.isRequired,
  user: PropTypes.any,
};
