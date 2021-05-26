import React from 'react';
import PropTypes from 'prop-types';
import ProjectView from './ProjectView';
import TechnologyView from './TechnologyView';

export default function Home({ user }) {
  return (
    <div>
      { user
        ? <h1>{user.fullName}</h1>
        : <h1>Hello, World!</h1>
      }
      <ProjectView />
      <TechnologyView />
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
