import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getAboutMeInfo = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/aboutMe.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const updateAboutMeInfo = (aboutMeObj, aboutMeID) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/aboutMe/${aboutMeID}.json`, aboutMeObj)
    .then(() => getAboutMeInfo().then((aboutMeArray) => resolve(aboutMeArray)))
    .catch((error) => reject(error));
});

export { updateAboutMeInfo, getAboutMeInfo };
