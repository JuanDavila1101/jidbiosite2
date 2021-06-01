import React from 'react';
import PropTypes from 'prop-types';
import AboutMeForm from '../components/Forms/aboutMeForm';

function AboutMeFormView({ aboutMeInfo, setAboutMeInfo }) {
  return (
    <>
     <div className="aboutMe-container">
       {aboutMeInfo.map((myInformation) => (
         <AboutMeForm
           key={myInformation.aboutMeID}
           fullName={myInformation.fullName}
           email={myInformation.email}
           aboutMeText={myInformation.aboutMeText}
           aboutMeID={myInformation.aboutMeID}
           setAboutMeInfo={setAboutMeInfo}
         />
       ))}
     </div>
    </>
  );
}

AboutMeFormView.propTypes = {
  aboutMeInfo: PropTypes.object.isRequired,
  setAboutMeInfo: PropTypes.func.isRequired
};

export default AboutMeFormView;
