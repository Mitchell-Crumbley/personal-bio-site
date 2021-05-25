import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, Card
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createTechnology, updateTechnology } from '../helpers/data/technologyData';

const TechnologyForm = ({
  formTitle,
  user,
  firebaseKey,
  technologyName,
  technologyDescription,
  technologyImage,
  setTechnologies
}) => {
  const [technology, setTechnology] = useState({
    technologyName: technologyName || '',
    technologyDescription: technologyDescription || '',
    technologyImage: technologyImage || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid || null,
  });

  const handleInputChange = (e) => {
    setTechnology((prevState) => ({
      ...prevState,
      [e.target.name]:
      e.target.name === 'privateTechnology' ? e.target.checked : e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (technology.firebaseKey) {
      updateTechnology(technology, user).then(setTechnologies);
    } else {
      createTechnology(technology, user).then(setTechnologies);
      history.push('/technology');

      // clear inputs
      setTechnology({
        technologyName: '',
        technologyDescription: '',
        deployLink: '',
        gitHubLink: '',
        firebaseKey: null,
        uid: null,
      });
    }
  };

  return (
  <div className='technology-form'>
  <Card body>
    <Form id='addTechnologyForm' autoComplete='off' onSubmit={handleSubmit}>
      <h2>{formTitle}</h2>
      <FormGroup>
        <Label for="technologyName">Name:</Label>
        <Input
          name='technologyName'
          id='technologyName'
          value={technology.technologyName}
          type='text'
          placeholder='Enter a Technology Name'
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="technologyDescription">Description:</Label>
        <Input
          name='technologyDescription'
          id='technologyDescription'
          value={technology.technologyDescription}
          type='text'
          placeholder='Enter a Board Description'
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="technologyImage">Image Link:</Label>
        <Input
          name='technologyImage'
          id='technologyImage'
          value={technology.technologyImage}
          type='url'
          placeholder='Enter an Deploy URL'
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button type='submit'>Submit</Button>
    </Form>
    </Card>
  </div>
  );
};

TechnologyForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setTechnologies: PropTypes.func,
  technologyName: PropTypes.string,
  technologyDescription: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any,
  technologyImage: PropTypes.string,
  className: PropTypes.string
};

export default TechnologyForm;
