import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <Container >
        <Row className="justify-content-center text-center">
          <Col xs={12} md={10} lg={8}>
            <h1 className="home-title slide-in-left">
              Welcome to <span className="studio-name">Cherry</span> <br />Dance Studio
            </h1>
            <h2 className="home-subtitle">"Move with Passion, Dance with Heart!"</h2>
            <p className="lead mb-4">
              Discover your rhythm, embrace your moves. Classes for all styles and skill levels.
            </p>
            <Button variant="success" size="lg" href="#register">
              Join Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
