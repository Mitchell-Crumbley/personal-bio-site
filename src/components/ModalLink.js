import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

const modalStyle = {
  width: '30rem',
  objectFit: 'cover',
  margin: '0',
};

export default function ModalLink({ ...projectObj }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      {modal && <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{projectObj.projectName}</ModalHeader>
        <ModalBody>
          <img style={modalStyle} src={projectObj.screenshot}></img>
          <p>{projectObj.projectDescription}</p>
        </ModalBody>
        <ModalFooter>
          <a href={projectObj.gitHubLink}>Github</a>
          <br></br>
          <a href={projectObj.deployLink}>Deployed Project</a>
        </ModalFooter>
      </Modal>
      }
    </div>
  );
}

ModalLink.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  project: PropTypes.object
};
