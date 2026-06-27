import React from 'react';
import './SectionTitle.css';

/**
 * Reusable Section Title Component.
 * @param {Object} props
 * @param {string} props.title - The main heading text.
 * @param {string} [props.subtitle] - Tagline or short description below the title.
 * @param {string} [props.theme='light'] - Theme: 'light' (default) or 'dark' (white text).
 * @param {string} [props.className=''] - Extra classes.
 */
export const SectionTitle = ({
  title,
  subtitle,
  theme = 'light',
  className = ''
}) => {
  return (
    <div className={`section-title ${theme === 'dark' ? 'section-title--light' : ''} ${className}`}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
