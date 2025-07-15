// src/Register.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap'; // Import Alert and Spinner
import PhoneInput from 'react-phone-input-2'; // Import PhoneInput
import 'react-phone-input-2/lib/style.css'; // Import its default CSS
import './Register.css'; // Your custom CSS for the Register section

const Register = () => {
  // Form data state
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_mobile: '', // Will be managed by PhoneInput
    gender: '',
    dob: '',
  });

  // Submission status state
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'submitting', 'success', 'error'
  const [validationErrors, setValidationErrors] = useState({}); // To store field-specific errors

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  // Handle PhoneInput change
  const handlePhoneChange = (value) => {
    setFormData({ ...formData, user_mobile: value });
    if (validationErrors.user_mobile) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, user_mobile: null }));
    }
  };

  // Client-side validation function
  const validateForm = () => {
    const errors = {};
    if (!formData.user_name) errors.user_name = 'Name is required.';
    if (!formData.user_email) {
      errors.user_email = 'Email is required.';
    } else if (!formData.user_email.endsWith('@gmail.com')) {
      errors.user_email = 'Email must be a @gmail.com address.';
    }
    if (!formData.user_mobile || formData.user_mobile.length < 5) { // Basic length check for phone
      errors.user_mobile = 'Mobile number is required and must be valid.';
    }
    if (!formData.gender) errors.gender = 'Gender is required.';
    if (!formData.dob) errors.dob = 'Date of Birth is required.';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser form submission

    if (!validateForm()) {
      setSubmissionStatus('error'); // Indicate validation error
      return;
    }

    setSubmissionStatus('submitting'); // Set status to submitting

    // Netlify form submission requires specific encoding
    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // IMPORTANT: The form-name must match the name of your hidden Netlify form in index.html
        body: encode({ 'form-name': 'register', ...formData }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        // Optionally clear the form after successful submission
        setFormData({
          user_name: '',
          user_email: '',
          user_mobile: '',
          gender: '',
          dob: '',
        });
        setValidationErrors({}); // Clear errors on success
      } else {
        setSubmissionStatus('error');
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="register" className="register-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="card shadow-lg p-4 register-form">
              <h2 className="text-center text-success mb-4">Register</h2>

              {/* Submission Feedback Messages */}
              {submissionStatus === 'submitting' && (
                <Alert variant="info" className="text-center">
                  <Spinner animation="border" size="sm" className="me-2" /> Submitting your registration...
                </Alert>
              )}
              {submissionStatus === 'success' && (
                <Alert variant="success" className="text-center">
                  Registration successful! We will get back to you shortly.
                </Alert>
              )}
              {submissionStatus === 'error' && (
                <Alert variant="danger" className="text-center">
                  Failed to register. Please check your inputs and try again.
                  {Object.keys(validationErrors).length > 0 && (
                    <ul className="mt-2 text-start">
                      {Object.values(validationErrors).map((error, index) => (
                        error && <li key={index}>{error}</li>
                      ))}
                    </ul>
                  )}
                </Alert>
              )}

              {/* Only show the form if not successfully submitted */}
              {submissionStatus !== 'success' && (
                <form name="register" onSubmit={handleSubmit}>
                  {/* Hidden input for Netlify, though not strictly needed for fetch, good practice */}
                  <input type="hidden" name="form-name" value="register" />

                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name</label>
                    <input
                      type="text"
                      id="userName"
                      name="user_name"
                      className={`form-control ${validationErrors.user_name ? 'is-invalid' : ''}`}
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                    {validationErrors.user_name && <div className="invalid-feedback">{validationErrors.user_name}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userEmail" className="form-label">Email</label>
                    <input
                      type="email"
                      id="userEmail"
                      name="user_email"
                      className={`form-control ${validationErrors.user_email ? 'is-invalid' : ''}`}
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                    {validationErrors.user_email && <div className="invalid-feedback">{validationErrors.user_email}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="userMobile" className="form-label">Mobile</label>
                    <PhoneInput
                      country={'in'} // Default country to India
                      value={formData.user_mobile}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: 'user_mobile',
                        id: 'userMobile',
                        required: true,
                        className: `form-control ${validationErrors.user_mobile ? 'is-invalid' : ''}` // Apply Bootstrap classes
                      }}
                      containerClass="phone-input-container" // Custom class for styling container if needed
                      inputClass="phone-input-field" // Custom class for styling the input itself
                      buttonClass="phone-input-button" // Custom class for styling the country code button
                      dropdownClass="phone-input-dropdown" // Custom class for styling the dropdown
                      enableSearch={true} // Allow searching for countries
                    />
                    {validationErrors.user_mobile && <div className="invalid-feedback d-block">{validationErrors.user_mobile}</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="Male"
                        className="form-check-input"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="male" className="form-check-label">Male</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="Female"
                        className="form-check-input"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                      />
                      <label htmlFor="female" className="form-check-label">Female</label>
                    </div>
                    {validationErrors.gender && <div className="text-danger small">{validationErrors.gender}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      className={`form-control ${validationErrors.dob ? 'is-invalid' : ''}`}
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                    {validationErrors.dob && <div className="invalid-feedback">{validationErrors.dob}</div>}
                  </div>

                  <button type="submit" className="btn btn-success w-100" disabled={submissionStatus === 'submitting'}>
                    {submissionStatus === 'submitting' ? (
                      <>
                        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                        Loading...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;