import { useState } from 'react';
import { isValidEmail, isValidPhone } from '../utils/helpers';

/**
 * Custom hook for validating and managing Contact Form state.
 * @param {Object} initialValues
 * @returns {Object}
 */
export const useFormValidation = (initialValues = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  message: ''
}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required.';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email address is required.';
        } else if (!isValidEmail(value)) {
          error = 'Please enter a valid email address.';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required.';
        } else if (!isValidPhone(value)) {
          error = 'Please enter a valid phone number.';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required.';
        } else if (value.trim().length < 10) {
          error = 'Message must be at least 10 characters long.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    
    // Clear errors dynamically on input change
    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      const error = validateField(key, values[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e, onSubmitCallback) => {
    e.preventDefault();
    setIsSuccess(false);
    
    const isValid = validateAll();
    if (isValid) {
      setIsSubmitting(true);
      
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setValues(initialValues);
        setErrors({});
        if (onSubmitCallback) onSubmitCallback(values);
      }, 1000);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
};

export default useFormValidation;
