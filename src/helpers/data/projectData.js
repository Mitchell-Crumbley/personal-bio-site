import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getProjects = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/projects.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createProjects = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/projects.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects(user).then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

const updateProjects = (obj, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/projects/${obj.firebaseKey}.json`, obj)
    .then(() => getProjects(user).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

export {
  getProjects, createProjects, updateProjects
};
