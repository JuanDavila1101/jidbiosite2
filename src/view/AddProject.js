import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import PropTypes from 'prop-types';
import ProjectForm from '../components/Forms/projectForm';

function AddProject({ setProjects }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObject = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
     <ProjectForm
       formTitle='Add a Project'
       setProjects={setProjects}
     />
    <hr/>
    </>
  );
}

AddProject.propTypes = {
  setProjects: PropTypes.func.isRequired
};

export default AddProject;
