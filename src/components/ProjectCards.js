import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardImgOverlay, CardLink,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from './ProjectForm';
// import { getProjects } from '../helpers/data/data';

const ProjectCards = ({
  user,
  firebaseKey,
  projectName,
  projectDescription,
  deployLink,
  gitHubLink,
  uid,
  setProjects
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();

  const handleCardButton = (type) => {
    switch (type) {
      case 'edit':
        console.warn(user);
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        console.warn('You clicked delete');
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
  <div>
    {
    editing ? <>
    <Card className="m-4 project-card">
        <CardLink className="form-close" href="#" onClick={() => handleCardButton('edit')}>
          {editing ? 'Close Form' : 'Edit Project'}
        </CardLink>
        <ProjectForm className='edit-form'
          formTitle='Edit Project'
          setProjects={setProjects}
          firebaseKey={firebaseKey}
          deployLink={deployLink}
          gitHubLink={gitHubLink}
          projectName={projectName}
          projectDescription={projectDescription}
          uid={uid}
          user={user}
        />
      </Card>
      </>
      : <Card className="m-4 project-card" key={firebaseKey}>
          <div className="overlay"></div>
          <CardImgOverlay>
          <div className="card-content">
            <CardTitle tag="h5">{projectName}</CardTitle>
            <CardText>{projectDescription}</CardText>
                <CardLink href="#" onClick={() => handleCardButton('delete')}>Delete</CardLink>
                <CardLink href="#" onClick={() => handleCardButton('edit')}>
                {editing ? 'Close Form' : 'Edit Board'}
                </CardLink>
            </div>
          </CardImgOverlay>
        </Card>
    }
</div>
  );
};

ProjectCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  deployLink: PropTypes.string,
  gitHubLink: PropTypes.string,
  projectName: PropTypes.string,
  projectDescription: PropTypes.string,
  setProjects: PropTypes.func.isRequired,
  user: PropTypes.any,
  uid: PropTypes.any,
};

export default ProjectCards;
