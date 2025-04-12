import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Instructors.css';

// Import images directly
import instructor1 from './instructor1.jpg';
import instructor2 from './instructor2.jpg';

const instructors = [
  {
    name: 'Pranil Kumar',
    image: instructor1,
    description: 'Energetic instructor with 8+ years in freestyle and hip-hop.',
  },
  {
    name: 'Shivangi Agrawal',
    image: instructor2,
    description: 'Award-winning Bharatanatyam dancer and choreographer.',
  },
];

const Instructors = () => {
  return (
    <section id="instructors" className="instructors-section">
      <Container>
        <h2 className="section-title text-center mb-5">Our Instructors</h2>
        <Row>
          {instructors.map((inst, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <Card className="instructor-card h-100 text-center">
                <Card.Img variant="top" src={inst.image} alt={inst.name} />
                <Card.Body>
                  <Card.Title>{inst.name}</Card.Title>
                  <Card.Text>{inst.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Instructors;
