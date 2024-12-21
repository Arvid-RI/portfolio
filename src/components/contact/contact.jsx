import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaPaperPlane, 
  FaSpinner, 
  FaCheck, 
  FaTimes, 
  FaUser, 
  FaTag 
} from 'react-icons/fa';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Example email service integration
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Have a project in mind?</h2>
          <p className="contact-description">Let's collaborate and create something extraordinary together.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-header">
                <div className="info-icon-wrapper">
                  <FaEnvelope className="info-icon" />
                </div>
                <h3>Contact Details</h3>
              </div>
              <div className="info-details">
                <a href="mailto:arvidriworkz@gmail.com" className="email-link">
                  arvidriworkz@gmail.com
                </a>
                <span className="response-time">
                  Response time: 24-48 hours
                </span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-group">
                <div className="input-wrapper">
                  <FaUser className="field-icon" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={formErrors.name ? 'error' : ''}
                  />
                </div>
                {formErrors.name && (
                  <span className="error-text">
                    <FaTimes /> {formErrors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <FaEnvelope className="field-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={formErrors.email ? 'error' : ''}
                  />
                </div>
                {formErrors.email && (
                  <span className="error-text">
                    <FaTimes /> {formErrors.email}
                  </span>
                )}
              </div>

              <div className="form-group full-width">
                <div className="input-wrapper">
                  <FaTag className="field-icon" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className={formErrors.subject ? 'error' : ''}
                  />
                </div>
                {formErrors.subject && (
                  <span className="error-text">
                    <FaTimes /> {formErrors.subject}
                  </span>
                )}
              </div>

              <div className="form-group full-width">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={formErrors.message ? 'error' : ''}
                  rows="5"
                />
                {formErrors.message && (
                  <span className="error-text">
                    <FaTimes /> {formErrors.message}
                  </span>
                )}
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={status.submitting}
            >
              {status.submitting ? (
                <><FaSpinner className="spinner" /> Sending...</>
              ) : (
                <><FaPaperPlane /> Send Message</>
              )}
            </button>

            {status.submitted && (
              <div className="success-message">
                <FaCheck /> Message sent successfully!
              </div>
            )}

            {status.error && (
              <div className="error-message">
                <FaTimes /> {status.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
