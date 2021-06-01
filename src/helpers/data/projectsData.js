import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const GetProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/projects.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addProject = (projectObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/projects.json`, projectObject)
    .then((response) => {
      const body = { projectID: response.data.name };
      axios.patch(`${dbURL}/projects/${response.data.name}.json`, body)
        .then(() => {
          GetProjects().then((projectArray) => resolve(projectArray));
        });
    }).catch((error) => reject(error));
});

const deleteProject = (projectID) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/projects/${projectID}.json`)
    .then(() => GetProjects().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

const updateProject = (projectObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/projects/${projectObject.projectID}.json`, projectObject)
    .then(() => GetProjects().then((projectArray) => resolve(projectArray)))
    .catch((error) => reject(error));
});

export {
  GetProjects, addProject, deleteProject, updateProject
};
