import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container >
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <h2 className="section-title">About Us</h2>
            <p>Learn more about CherryPranil<br/> Dance Studio and our passion for dance!</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/oVPpJOhOHSA?rel=0&modestbranding=1&controls=1"  
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/OuxSwyMWvJU?rel=0&modestbranding=1&controls=1"  
                title="YouTube video"
               
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
