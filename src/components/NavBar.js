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
// import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link className="navbar-brand" to="/">Mitchell Crumbley</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">About Me</Link>
            </NavItem>
            <NavItem>
              <ScrollLink smooth={true} className="nav-link" to="technologies">Technologies</ScrollLink>
            </NavItem>
           {
              admin && <NavItem>
              <Link to='/projects'>Auth Projects</Link>
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
