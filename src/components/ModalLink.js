import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

const ModalImg = styled.img`
  width: 29rem;
`;

export default function ModalPop({ showModal, setShowModal, ...projectObj }) {
  const toggle = () => setShowModal(!showModal);
  return (
    <div>
      {showModal && <Modal id='modal' isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{projectObj.projectName}</ModalHeader>
        <ModalBody >
          <ModalImg src={projectObj.projectImage}></ModalImg>
          <p>{projectObj.projectDescription}</p>
        </ModalBody>
        <ModalFooter>
          <a href={projectObj.gitHubLink} target="_blank" rel="noopener noreferrer">Github</a>
          <br></br>
          <a href={projectObj.deployLink} target="_blank" rel="noopener noreferrer">Deployed Project</a>
        </ModalFooter>
      </Modal>
      }
    </div>
  );
}

ModalPop.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  project: PropTypes.object
};
