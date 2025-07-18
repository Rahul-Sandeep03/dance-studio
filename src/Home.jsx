import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section d-flex align-items-center">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={10} lg={8}>
            <h1 className="home-title slide-in-left">
              {/* Desktop view: "Welcome to Cherry Dance Studios" in one line */}
              <span className="desktop-title">Welcome to <span className="studio-name">Cherry Dance Studios</span></span>

              {/* Mobile view: "Welcome to" on line 1, "Cherry Dance Studios" on line 2 */}
              <span className="mobile-title">
                <div>Welcome to</div>
                <div><span className="studio-name">Cherry Dance Studios</span></div>
              </span>
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