import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/projects.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createProjects = (projectObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/projects.json`, projectObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectsArray) => resolve(projectsArray));
        });
    })
    .catch((error) => reject(error));
});

const updateProjects = (projectObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/projects/${projectObj.firebaseKey}.json`, projectObj)
    .then(() => getProjects().then(resolve))
    .catch((error) => reject(error));
});

const deleteProjects = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((projectsArray) => resolve(projectsArray)))
    .catch((error) => reject(error));
});

export {
  getProjects, createProjects, updateProjects, deleteProjects
};
