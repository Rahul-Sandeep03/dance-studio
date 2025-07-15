import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import VideoEmbed from './VideoEmbed'; // Import the new VideoEmbed component

const youtubeVideos = [
  { id: 'oVPpJOhOHSA', title: 'Dance Video 1 - Freestyle' },
  { id: 'OuxSwyMWvJU', title: 'Dance Video 2 - Hip-Hop' },
  { id: 'kQJGW9zPfyE', title: 'Dance Video 3 - Bollywood Fusion' },
  { id: 'elTMH3JatwI', title: 'Dance Video 4 - Contemporary' },
  { id: '9MehIpNXvtQ', title: 'Dance Video 5 - Indian Classical' },
  { id: 'Z3yUMUd9llo', title: 'Dance Video 6 - Studio Showcase' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <h2 className="section-title">About Us</h2>
            <p>Learn more about CherryPranil<br/> Dance Studio and our passion for dance!</p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          {youtubeVideos.map((video, index) => (
            <Col
              key={index}
              xs={12}     // On extra small screens, one video per row
              sm={6}      // On small (and larger) screens, two videos per row
              className="mb-4" // Margin bottom for spacing between rows
            >
              <VideoEmbed videoId={video.id} title={video.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default About;