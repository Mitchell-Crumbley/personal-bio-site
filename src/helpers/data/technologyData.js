import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getTechnology = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/technology.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createTechnology = (obj, user) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/technology.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/technology/${response.data.name}.json`, body)
        .then(() => {
          getTechnology(user).then((resp) => resolve(resp));
        });
    })
    .catch((error) => reject(error));
});

const updateTechnology = (obj, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/technology/${obj.firebaseKey}.json`, obj)
    .then(() => getTechnology(user).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

export {
  getTechnology, createTechnology, updateTechnology
};
