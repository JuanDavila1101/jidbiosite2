import React from 'react';
import {
  Card, CardText, CardTitle, CardBody, CardSubtitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const AboutPage = ({
  fullName,
  email,
  aboutMeText
}) => {
  console.warn(fullName);

  return (
    <Card style={{ width: '18rem' }}>
        <CardBody>
          <CardTitle tag="h5">{fullName}</CardTitle>
        </CardBody>
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{aboutMeText}</CardSubtitle>
          <CardText>{aboutMeText}{email}</CardText>
          <hr />
        </CardBody>
    </Card>
  );
};

AboutPage.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  aboutMeText: PropTypes.string.isRequired
};

export default AboutPage;
