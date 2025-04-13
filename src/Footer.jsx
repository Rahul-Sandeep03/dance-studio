import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-white py-4">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={6} className="mb-4 mb-md-0">
            <h5>Email Us</h5>
            <p>Email: cherrypranildance@gmail.com</p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <div className="social-icons justify-content-md-end">
              <a href="https://www.instagram.com/cherrypranil?igsh=MXIzYXE0OGt4ZmJ0Zg==" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/share/1A4R3ZMtZS/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://youtube.com/@cherryandpranil?feature=shared" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        <Row className="text-center mt-4">
          <Col xs={12} md={6}>
            <h5>Address</h5>
            <p>Barrhaven, Ottawa</p>
          </Col>
          <Col xs={12} md={6}>
            <h5>Contact</h5>
            <p>Phone: 613-890-3789</p>
          </Col>
        </Row>

        <hr className="bg-light mt-4" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} CherryPranil Dance Studio. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
