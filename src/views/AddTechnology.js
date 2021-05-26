import React from 'react';
import PropTypes from 'prop-types';
import TechnologyForm from '../components/TechnologyForm';

function AddTechnology({ setTechnologies, user }) {
  return (
    <div>
      <TechnologyForm
        formTitle='Add Technology'
        setTechnologies={setTechnologies}
        user={user}
      />
    </div>
  );
}

AddTechnology.propTypes = {
  setTechnologies: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default AddTechnology;
