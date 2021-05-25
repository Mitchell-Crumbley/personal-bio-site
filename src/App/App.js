import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from '../components/NavBar';
import { getProjects } from '../helpers/data/projectData';
import { getTechnology } from '../helpers/data/technologyData';

function App() {
  // This hook maintains state of user in app, the absense of which resulting in the state of null
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  // Authentication for Firebase on initial render
  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@gmail.com')[0]
        };
        setUser(userObj);
        getProjects(userObj).then(setProjects);
        getTechnology(userObj).then(setTechnologies);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <Router>
      <NavBar user={user} setProjects={setProjects} setTechnologies={setTechnologies}/>
      <Routes
        user={user}
        projects={projects}
        setProjects={setProjects}
        technologies={technologies}
        setTechnologies={setTechnologies}
      />
    </Router>
    </>
  );
}

export default App;
