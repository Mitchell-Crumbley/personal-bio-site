import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Card, CardText, CardImgOverlay, CardLink,
  CardTitle,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import TechnologyForm from './TechnologyForm';
// import { getTechnology } from '../helpers/data/technologyData';

const TechnologyCards = ({
  user,
  firebaseKey,
  technologyName,
  technologyDescription,
  technologyImage,
  uid,
  setTechnologies
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
    <Card className="m-4 technology-card">
        <CardLink className="form-close" href="#" onClick={() => handleCardButton('edit')}>
          {editing ? 'Close Form' : 'Edit Technology'}
        </CardLink>
        <TechnologyForm className='edit-form'
          formTitle='Edit Technology'
          setTechnologies={setTechnologies}
          firebaseKey={firebaseKey}
          technologyImage={technologyImage}
          technologyName={technologyName}
          technologyDescription={technologyDescription}
          uid={uid}
          user={user}
        />
      </Card>
      </>
      : <Card className="m-4 technology-card" key={firebaseKey}>
            <div className="img-div">
              <CardImg className="card-img" width="100%" src={technologyImage} alt={technologyName} />
            </div>
          <div className="overlay"></div>
          <CardImgOverlay>
          <div className="card-content">
            <CardTitle tag="h5">{technologyName}</CardTitle>
            <CardText>{technologyDescription}</CardText>
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

TechnologyCards.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  technologyImage: PropTypes.string,
  technologyName: PropTypes.string,
  technologyDescription: PropTypes.string,
  setTechnologies: PropTypes.func.isRequired,
  user: PropTypes.any,
  uid: PropTypes.any,
};

export default TechnologyCards;
