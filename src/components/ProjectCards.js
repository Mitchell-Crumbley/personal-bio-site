import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card,
  Button,
  CardBody,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from './ProjectForm';
import { deleteProjects } from '../helpers/data/projectData';
import download from '../assets/download.png';
import ModalLink from './ModalLink';

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
    <Card className="m-4 project-card">
        <div className="overlay"></div>
        <CardImg onClick={openModal} src={download}></CardImg>
        <CardBody>
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
        </CardBody>
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
