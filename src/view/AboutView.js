import React from 'react';
import PropTypes from 'prop-types';
import AboutPage from '../components/Pages/AboutPage';

function AboutView({ aboutMeInfo }) {
  return (
    <>
     <div className="aboutMe-container">
       {aboutMeInfo.map((myInformation) => (
         <AboutPage
           key={aboutMeInfo.aboutMeID}
           fullName={myInformation.fullName}
           email={myInformation.email}
           aboutMeText={myInformation.aboutMeText}
           aboutMeID={myInformation.aboutMeID}
         />
       ))}
     </div>
    </>
  );
}

AboutView.propTypes = {
  aboutMeInfo: PropTypes.array.isRequired
};

export default AboutView;
