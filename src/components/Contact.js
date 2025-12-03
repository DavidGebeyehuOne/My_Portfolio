import React from 'react';
import PropTypes from 'prop-types';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';

const contactMethods = [
  {
    label: 'Email',
    value: 'dawitgebeyehu08@gmail.com',
    href: 'mailto:dawitgebeyehu08@gmail.com',
    icon: emailIcon
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258',
    icon: linkedinIcon
  }
];

const Contact = ({ theme }) => {
  return (
    <section id="contact" className={`contact-section ${theme}`}>
      <div className="section-header">
        <p className="section-subtitle">Get in Touch</p>
        <h1 className="section-title">Contact Me</h1>
      </div>

      <div className="contact-cards-row">
        <div className="form-card">
          <div className="contact-form-container">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                // basic submit handler placeholder
                const fd = new FormData(e.target);
                // You can wire this up to your API or mailto here
                // For now we'll just log the values
                // eslint-disable-next-line no-console
                console.log(Object.fromEntries(fd.entries()));
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>

              <div className="contact-actions">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="info-card">
          <h3 className="info-title">Contact Info</h3>

          <div className="contact-methods">
            {contactMethods.map((method) => (
              <a
                href={method.href}
                key={method.label}
                className="contact-method-card"
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <img src={method.icon} alt="" className="contact-method-icon" />
                <div>
                  <p className="method-label">{method.label}</p>
                  <p className="method-value">{method.value}</p>
                </div>
              </a>
            ))}
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