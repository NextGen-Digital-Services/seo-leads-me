/**
 * Validates an email address.
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a phone number (basic check for digits and length).
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidPhone = (phone) => {
  // Matches basic formats with digits, spaces, hyphens, plus signs
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.trim());
};

/**
 * Truncates text to a specific length.
 * @param {string} text
 * @param {number} limit
 * @returns {string}
 */
export const truncateText = (text, limit = 100) => {
  if (text.length <= limit) return text;
  return text.slice(0, limit) + '...';
};
