import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

// ============================================
// EMAILJS CONFIGURATION
// ============================================
// Replace these with your actual EmailJS credentials
// Get them from: https://dashboard.emailjs.com/
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_b5tanwv',
  TEMPLATE_ID: 'template_412r04m',
  PUBLIC_KEY: '9zGmBBo0q9kYaq7S8'
};
// ============================================

const contactMethods = [
  {
    label: 'Email',
    value: 'dawitgebeyehu08@gmail.com',
    href: 'mailto:dawitgebeyehu08@gmail.com',
    icon: <FaEnvelope className="contact-method-icon" />
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258',
    icon: <FaLinkedin className="contact-method-icon" />
  }
];

const Contact = ({ theme }) => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormState({ loading: true, success: false, error: false, message: '' });

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setFormState({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });

      // Reset form
      formRef.current.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormState({ loading: false, success: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormState({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again or contact me directly via email.'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormState({ loading: false, success: false, error: false, message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className={`contact-section ${theme}`}>
      <div className="section-header">
        <p className="section-subtitle">Get in Touch</p>
        <h1 className="section-title">Contact Me</h1>
      </div>

      <div className="contact-card-container">
        <div className="contact-card">
          {/* Left Side: Contact Form */}
          <div className="contact-form-section">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <h3 className="form-title">Send Me a Message</h3>
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  id="user_name"
                  name="user_name"
                  type="text"
                  required
                  disabled={formState.loading}
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  required
                  disabled={formState.loading}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={formState.loading}
                  placeholder="Your message here..."
                  rows="5"
                />
              </div>

              {formState.message && (
                <div className={`form-message ${formState.success ? 'success' : 'error'}`}>
                  {formState.message}
                </div>
              )}

              <div className="contact-actions">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={formState.loading}
                >
                  {formState.loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="contact-info-section">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-subtitle">Feel free to reach out through any of these channels</p>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <a
                  href={method.href}
                  key={method.label}
                  className="contact-method-item"
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="method-icon-wrapper">
                    {method.icon}
                  </div>
                  <div className="contact-method-info">
                    <p className="method-label">{method.label}</p>
                    <p className="method-value">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired
};

export default Contact;