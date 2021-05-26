import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const styledBtn = {
  marginTop: '65px'
};
export default function AuthedView({ user }) {
  return (
    <div style={styledBtn}>
        {
          user
            ? <Button id="logOutBtn" onClick={signOutUser}>Sign Out</Button>
            : <Button id="logInBtn" onClick={signInUser}>Sign In</Button>
        }
    </div>
  );
}

AuthedView.propTypes = {
  user: propTypes.any
};
