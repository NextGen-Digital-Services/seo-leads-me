import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import useFormValidation from '../../hooks/useFormValidation';
import Button from '../common/Button';
import './ContactForm.css';

export const ContactForm = () => {
  const {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormValidation({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const onSubmit = (formData) => {
    // Console log form output or integrate API
    console.log('Form Submitted successfully:', formData);
  };

  return (
    <div className="contact-form-wrapper fade-up-element">
      <h3 className="form-heading">Get In Touch</h3>
      <p className="form-subtext">
        Have a project in mind? Let's talk and grow your business together.
      </p>

      {isSuccess && (
        <div className="success-message animate-fade-in">
          <FaCheckCircle style={{ color: '#ffffff', fontSize: '1.25rem' }} />
          <span className="success-text">Your message has been sent successfully!</span>
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="contact-form" noValidate>
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            className={`form-input ${errors.fullName ? 'input-error' : ''}`}
            required
          />
          {errors.fullName && <span className="error-message-text">{errors.fullName}</span>}
        </div>

        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            required
          />
          {errors.email && <span className="error-message-text">{errors.email}</span>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+1 (123) 456-7890"
            className={`form-input ${errors.phone ? 'input-error' : ''}`}
            required
          />
          {errors.phone && <span className="error-message-text">{errors.phone}</span>}
        </div>

        {/* Your Company */}
        <div className="form-group">
          <label htmlFor="company" className="form-label">Your Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={values.company}
            onChange={handleChange}
            placeholder="Tech Corp"
            className="form-input"
          />
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us about your project..."
            className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
            required
          ></textarea>
          {errors.message && <span className="error-message-text">{errors.message}</span>}
        </div>

        {/* Submit button */}
        <div className="form-submit-btn">
          <Button
            type="submit"
            variant="filled"
            fullWidth
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
