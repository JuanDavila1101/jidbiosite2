import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import {
  Col, Row
} from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { getAboutMeInfo } from '../helpers/data/aboutData';
import './App.scss';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
import { GetProjects } from '../helpers/data/projectsData';

function App() {
  const [aboutMeInfo, setAboutMeInfo] = useState([]);
  const [projects, setProjects] = useState([]);
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
        if (authed !== null) {
          getAboutMeInfo().then((resp) => setAboutMeInfo(resp));
          GetProjects().then((resp) => setProjects(resp));
          setUser(true);
        }
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
      <NavBar
        user={user}
       />
          <Row
           noGutters
          >
            <Col
            xs='2'
            >
            </Col>
            <Col
            xs='8'
            >
              <Routes
                user={user}
                aboutMeInfo={aboutMeInfo}
                setAboutMeInfo={setAboutMeInfo}
                projects={projects}
                setProjects={setProjects}
              />
            </Col>
            <Col
            xs='2'
            >
            </Col>
          </Row>
        </Router>
    </>

  );
}

export default App;
