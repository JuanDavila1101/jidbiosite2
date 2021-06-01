import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/data/auth';

const NavBar = ({ user }) => {
  // const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/about-me-form" >About Me Form</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/add-project">Projects Form</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="nav-link" to="/about-me-page" >About Me</Link>
        <Link className="nav-link" to="/projects-page" >Projects page</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user && authenticated()}
            <NavItem>
              {
                 user !== null
                 && <NavItem>
                      {
                        user
                          ? <Button color='secondary' onClick={signOutUser}>Sign Out</Button>
                          : <Button color='info' onClick={signInUser}>Sign In</Button>
                       }
                    </NavItem>
               }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
