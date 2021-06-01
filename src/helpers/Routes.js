import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../view/Home';
import AboutView from '../view/AboutView';
import AboutMeFormView from '../view/AboutMeFormView';
import ProjectsView from '../view/ProjectsView';
import AddProject from '../view/AddProject';
// import ProjectForm from '../components/Forms/projectForm';

export default function Routes({
  aboutMeInfo, setAboutMeInfo, projects, setProjects
}) {
  return (
    <div>
      <Switch>
        <Route
           exact
           path='/'
           component={Home}
         />
        <Route
           exact
           path='/about-me-page'
           component={() => <AboutView
                              aboutMeInfo={aboutMeInfo}
                            />}
         />
        <Route
           exact
           path='/about-me-form'
           component={() => <AboutMeFormView
                              aboutMeInfo={aboutMeInfo}
                              setAboutMeInfo={setAboutMeInfo}
                            />}
         />
        <Route
           exact
           path='/projects-page'
           component={() => <ProjectsView
                              projects={projects}
                              setProjects={setProjects}
                            />}
         />
        <Route
           exact
           path='/add-project'
           component={() => <AddProject
                              setProjects={setProjects}
                            />}
         />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  aboutMeInfo: PropTypes.array.isRequired,
  setAboutMeInfo: PropTypes.func.isRequired,
  projects: PropTypes.array.isRequired,
  setProjects: PropTypes.func.isRequired
};
