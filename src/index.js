import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebaseConfig from './helpers/apiKeys';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
