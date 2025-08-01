import React, { useState } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_mobile: '',
    gender: '',
    dob: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, user_mobile: value });
    if (validationErrors.user_mobile) {
      setValidationErrors((prev) => ({ ...prev, user_mobile: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.user_name) errors.user_name = 'Name is required.';
    if (!formData.user_email) {
      errors.user_email = 'Email is required.';
    } else if (!formData.user_email.endsWith('@gmail.com')) {
      errors.user_email = 'Email must be a @gmail.com address.';
    }
    if (!formData.user_mobile || formData.user_mobile.length < 5) {
      errors.user_mobile = 'Mobile number is required and must be valid.';
    }
    if (!formData.gender) errors.gender = 'Gender is required.';
    if (!formData.dob) errors.dob = 'Date of Birth is required.';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmissionStatus('error');
      return;
    }

    setSubmissionStatus('submitting');

    const encode = (data) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'register', ...formData }),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          user_mobile: '',
          gender: '',
          dob: '',
        });
        setValidationErrors({});
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <section id="register" className="register-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="card shadow-lg p-4 register-form">
              <h2 className="text-center register-title mb-4">Register</h2>


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
                      {Object.values(validationErrors).map(
                        (error, index) => error && <li key={index}>{error}</li>
                      )}
                    </ul>
                  )}
                </Alert>
              )}

              {submissionStatus !== 'success' && (
                <form name="register" onSubmit={handleSubmit}>
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
                      country={'in'}
                      value={formData.user_mobile}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: 'user_mobile',
                        id: 'userMobile',
                        required: true,
                        className: `form-control ${validationErrors.user_mobile ? 'is-invalid' : ''}`,
                      }}
                      containerClass="phone-input-container"
                      inputClass="phone-input-field"
                      buttonClass="phone-input-button"
                      dropdownClass="phone-input-dropdown"
                      enableSearch={true}
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

                  <button type="submit" className="btn custom-register-btn w-100" disabled={submissionStatus === 'submitting'}>
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
