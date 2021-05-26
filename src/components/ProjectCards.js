import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardImgOverlay
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from './ProjectForm';
import { deleteProjects } from '../helpers/data/projectData';
import ModalLink from './ModalLink';

// const cardStyle = {
//   width: '20rem',
//   backgroundColor: '#fffbf0',
//   margin: '10px',
//   cursor: 'pointer',
//   border: 'none'
// };

// const overlayStyle = {
//   position: 'absolute',
//   background: '#000000',
//   opacity: '.6',
//   width: '100%',
//   height: '100%',
//   transition: '.5s ease',
//   color: '#ffffff',
// };

const btnStyle = {
  textAlign: 'center',
  fontFamily: ['bookmania', 'serif'],
  fontWeight: '700',
  fontStyle: 'italic'
};
export default function ProjectCards({ admin, setProjects, ...projectObj }) {
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const handleCardButton = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'delete':
        deleteProjects(projectObj.firebaseKey)
          .then((projectsArray) => setProjects(projectsArray));
        break;
      default:
        console.warn('No button clicked');
    }
  };

  return (
  <div>
    <Card className="m-2 project-card">
    <div className="img-div">
      <CardImg className="card-img" onClick={openModal} src={projectObj.projectImage}></CardImg>
    </div>
    <div className="overlay">
    <CardImgOverlay>
        <div className="card-content">
        <CardTitle tag="h5">{projectObj.projectName}</CardTitle>
        <CardText>{projectObj.projectDescription}</CardText>
          {
            admin && <div>
            <Button onClick={() => handleCardButton('delete')}>Delete Project</Button>
            <Button onClick={() => handleCardButton('edit')}>{editing ? 'Close Form' : 'Edit Project'}</Button>
            {
              editing && <ProjectForm
              setProjects={setProjects}
              {...projectObj}
              />
            }
            </div>
          }
        <h6 style={btnStyle} onClick={openModal}>learn more</h6>
        </div>
        </CardImgOverlay>
        </div>
     </Card>
  <ModalLink showModal={showModal} setShowModal={setShowModal} {...projectObj}/>
</div>
  );
}

ProjectCards.propTypes = {
  setProjects: PropTypes.func.isRequired,
  admin: PropTypes.any,
  projectObj: PropTypes.array
};
