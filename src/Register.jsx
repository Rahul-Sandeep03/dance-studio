import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Register.css';

const Register = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ma15sfb',     
      'template_4crow0r',   
      form.current,
      '--1nTLx9RHbp0du4o'    
    )
    .then(() => {
      alert('Form sent successfully!');
      form.current.reset(); 
    })
    .catch((error) => {
      alert('Failed to send form. Try again.');
      console.error(error);
    });
  };

  return (
    <section id="register" className="register-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="card shadow-lg p-4 register-form">
              <h2 className="text-center text-success mb-4">Register</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" name="user_name" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="user_email" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input type="tel" name="user_mobile" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div className="form-check">
                    <input type="radio" id="male" name="gender" value="Male" className="form-check-input" required />
                    <label htmlFor="male" className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id="female" name="gender" value="Female" className="form-check-input" />
                    <label htmlFor="female" className="form-check-label">Female</label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">Date of Birth</label>
                  <input type="date" name="dob" className="form-control" required />
                </div>

                <button type="submit" className="btn btn-success w-100">Submit</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
