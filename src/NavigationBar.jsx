import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CP from './CP.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <Navbar variant="light" expand="lg" sticky="top" style={{ backgroundColor: '#E5D0CF', width: '100%' }}>
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center" style={{ fontSize: 27 }}>
          <img
            src={CP}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          Cherry<span style={{ color: 'green' }}>Pranil</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" onSelect={handleSelect}>
            <Nav.Link
              eventKey="home"
              href="#home"
              className={`mx-2 ${activeLink === 'home' ? 'active-nav' : ''}`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              eventKey="about"
              href="#about"
              className={`mx-2 ${activeLink === 'about' ? 'active-nav' : ''}`}
            >
              About
            </Nav.Link>
            <Nav.Link
              eventKey="instructors"
              href="#instructors"
              className={`mx-2 ${activeLink === 'instructors' ? 'active-nav' : ''}`}
            >
              Instructors
            </Nav.Link>
            <Nav.Link
              eventKey="gallery"
              href="#gallery"
              className={`mx-2 ${activeLink === 'gallery' ? 'active-nav' : ''}`}
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              eventKey="register"
              href="#register"
              className={`mx-2 ${activeLink === 'register' ? 'active-nav' : ''}`}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
