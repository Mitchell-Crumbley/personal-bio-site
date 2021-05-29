import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  // Button
} from 'reactstrap';
import Resume from '../assets/Resume.pdf';
// import { signInUser, signOutUser } from '../helpers/auth';

const NavStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginLeft: '15px',
  marginRight: '15px',
  fontSize: '20px'
};

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <Link className="navbar-brand" to="/">Mitchell Crumbley</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={NavStyles} className="mr-auto" navbar>
            <NavItem>
              <ScrollLink style={NavStyles} smooth={true} className="nav-link" to="about">About Me</ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink style={NavStyles} smooth={true} className="nav-link" to="projects">Past Work</ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink style={NavStyles} smooth={true} className="nav-link" to="technologies">Technologies</ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink style={NavStyles} smooth={true} className="nav-link" to="contact">Contact</ScrollLink>
            </NavItem>
            <NavItem>
              <a style={NavStyles} className="nav-link" href={Resume} to="resume" target="_blank" rel="noopener noreferrer" >Resume</a>
            </NavItem>
           {
              admin && <NavItem>
              <Link to='/projects'>Administrator</Link>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
