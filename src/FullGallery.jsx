import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Gallery.css'; // Reuse the same CSS for styling

// Import all your gallery images
import galleryImage1 from './Image1.webp';
import galleryImage2 from './Image2.webp';
import galleryImage3 from './Image3.webp';
import galleryImage4 from './Image4.webp';
import galleryImage5 from './Image5.webp';
import galleryImage6 from './Image6.webp';
import galleryImage7 from './Image7.webp';
import galleryImage8 from './Image8.webp';

const galleryImages = [
  { src: galleryImage1, alt: 'Image 1' },
  { src: galleryImage2, alt: 'Image 2' },
  { src: galleryImage3, alt: 'Image 3' },
  { src: galleryImage4, alt: 'Image 4' },
  { src: galleryImage5, alt: 'Image 5' },
  { src: galleryImage6, alt: 'Image 6' },
  { src: galleryImage7, alt: 'Image 7' },
  { src: galleryImage8, alt: 'Image 8' },
];

const FullGallery = () => {
  return (
    <section id="full-gallery" className="gallery-section">
      <Container>
        <h2 className="section-title text-center mb-5">Our Full Gallery</h2>
        <Row>
          {galleryImages.map((image, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={3} className="mb-4">
              <Card className="gallery-card">
                <Card.Img variant="top" src={image.src} alt={image.alt} />
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          {/* Link to navigate back to the home page */}
          <Link to="/">
            <Button className="view-more-button">
              Back to Main Tab
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FullGallery;
