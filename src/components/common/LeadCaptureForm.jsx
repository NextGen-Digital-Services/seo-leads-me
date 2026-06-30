import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import useFormValidation from '../../hooks/useFormValidation';
import Button from './Button';
import './LeadCaptureForm.css';

export const LeadCaptureForm = ({ 
  title = "Request Free Samples", 
  subtitle = "Stop wasting money on leads that never respond. Get pre-qualified, fresh leads delivered straight to your inbox.",
  requirementLabel = "Enter your requirement *"
}) => {
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
    message: ''
  });

  const onSubmit = (formData) => {
    console.log('Lead Form Submitted successfully:', formData);
  };

  return (
    <div id="formup" className="lead-capture-container section-light">
      <div className="lead-capture-inner">
        <div className="contact-form-wrapper fade-up-element">
          <h3 className="form-heading">{title}</h3>
          <p className="form-subtext">{subtitle}</p>

          {isSuccess && (
            <div className="success-message animate-fade-in">
              <FaCheckCircle style={{ color: '#ffffff', fontSize: '1.25rem' }} />
              <span className="success-text">Your sample request has been submitted successfully!</span>
            </div>
          )}

          <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="contact-form" noValidate>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Name *</label>
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
              <label htmlFor="email" className="form-label">Email *</label>
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
              <label htmlFor="phone" className="form-label">Phone *</label>
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

            {/* Message / Requirement */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">{requirementLabel}</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about the leads you need (niche, geo, weekly volume)..."
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
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadCaptureForm;
