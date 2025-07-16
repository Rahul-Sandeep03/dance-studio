import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CP from './CP.svg';
import './NavigationBar.css';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home'); 
  const navbarRef = useRef(null); 
  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  useEffect(() => {
   
    const sections = [
      { id: 'home', element: document.getElementById('home') },
      { id: 'about', element: document.getElementById('about') },
      { id: 'instructors', element: document.getElementById('instructors') },
      { id: 'gallery', element: document.getElementById('gallery') },
      { id: 'register', element: document.getElementById('register') },
    ].filter(sec => sec.element); 

    const handleScroll = () => {
      
      const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
      const scrollPos = window.scrollY + navbarHeight + 1;

      let currentActive = 'home'; 

     
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i].element;
        const sectionId = sections[i].id;

        
        if (section && scrollPos >= section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
          currentActive = sectionId;
          break;
        }
      }

     
      if (activeLink !== currentActive) {
        setActiveLink(currentActive);
      }
    };

   
    window.addEventListener('scroll', handleScroll);

    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]); 

  return (
    <Navbar ref={navbarRef} variant="light" expand="lg" sticky="top" style={{ backgroundColor: '#E5D0CF', width: '100%' }}>
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center" style={{ fontSize: 27 }}>
          <img
            src={CP}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span style={{ color: 'green' }}>CDS</span>
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
              eventKey="gallery"
              href="#gallery"
              className={`mx-2 ${activeLink === 'gallery' ? 'active-nav' : ''}`}
            >
              Gallery
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