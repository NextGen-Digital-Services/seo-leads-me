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
    apiError,
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

  const onSubmit = async (formData) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      throw new Error('Web3Forms access key is not configured.');
    }

    const payload = {
      access_key: accessKey,
      subject: `New Lead Inquiry from ${formData.fullName}`,
      from_name: 'SEO Leads Web App',
      name: formData.fullName,
      email: formData.email,
      message: formData.message
    };

    if (formData.phone) {
      payload.phone = formData.phone;
    }
    if (formData.company) {
      payload.company = formData.company;
    }
    if (formData.service) {
      payload.service = formData.service;
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (!result.success) {
      throw new Error(result.message || 'API submission failed.');
    }
  };

  return (
    <div className="contact-form-wrapper fade-up-element">
      <h3 className="form-heading">Drop Us a Line</h3>
      <p className="form-subtext">
        Get Free Samples
      </p>

      {isSuccess && (
        <div className="success-message animate-fade-in" style={{ backgroundColor: '#28a745', color: '#ffffff', padding: '15px', borderRadius: '6px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaCheckCircle style={{ color: '#ffffff', fontSize: '1.25rem' }} />
          <span className="success-text">Thank you! Your inquiry has been submitted successfully.</span>
        </div>
      )}

      {apiError && (
        <div className="error-message animate-fade-in" style={{ backgroundColor: '#dc3545', color: '#ffffff', padding: '15px', borderRadius: '6px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="error-text">Something went wrong. Please try again.</span>
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
