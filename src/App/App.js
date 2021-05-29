import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from '../components/NavBar';

export default function App() {
  const [admin, setAdmin] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Authentication for Firebase on initial render
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        setLoggedInUser(true);
        console.warn(process.env.REACT_APP_ADMIN_UID, authed.uid, admin);
      } else if (admin || admin === null) {
        setAdmin(false);
        setLoggedInUser(false);
      }
    });
  }, []);

  return (
    <>
    <Router>
      <NavBar admin={admin}/>
      <Routes user={loggedInUser}
        admin={admin}
      />
    </Router>
    </>
  );
}
