import React, { useState } from 'react';
import {
  FormGroup, Form, Label, Input, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { updateAboutMeInfo } from '../../helpers/data/aboutData';

const AboutMeForm = ({
  fullName,
  email,
  aboutMeText,
  aboutMeID,
  setAboutMeInfo,
}) => {
  const [aboutMe, setAboutMe] = useState({
    fullName: fullName || '',
    email: email || '',
    aboutMeText: aboutMeText || '',
    aboutMeID: aboutMeID || null
  });

  const handleInputChange = (e) => {
    setAboutMe((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (aboutMe.aboutMeID) {
      updateAboutMeInfo(aboutMe, aboutMe.aboutMeID).then((response) => setAboutMeInfo(response));
    } else {
      setAboutMe({
        fullName: '',
        email: '',
        aboutMeText: '',
        aboutMeID: null
      });
    }
    setAboutMeInfo(aboutMe);
  };

  return (
    <>
    <div className='about-me-form'>
      <Form id='addAboutMeForm' autoComplete='off' onSubmit={handleSubmit}>
        <h2>Title: About Me Page</h2>
        <FormGroup>
          <Label>Full Name:</Label>
          <Input
            name='fullName'
            id='fullName'
            type='text'
            placeholder='Enter a full name'
            value={aboutMe.fullName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <Input
            name='email'
            id='email'
            type='text'
            placeholder='Enter an email'
            value={aboutMe.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>about me:</Label>
          <Input
            name='aboutMeText'
            id='aboutMeText'
            type='text'
            placeholder='about me '
            value={aboutMe.aboutMeText}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
    </>
  );
};

AboutMeForm.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  aboutMeText: PropTypes.string,
  aboutMeID: PropTypes.string,
  setAboutMeInfo: PropTypes.func
};

export default AboutMeForm;
