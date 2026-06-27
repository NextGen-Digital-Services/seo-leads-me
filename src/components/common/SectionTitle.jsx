import React from 'react';
import './SectionTitle.css';

/**
 * Reusable Section Title Component.
 * @param {Object} props
 * @param {string} props.title - The main heading text.
 * @param {string} [props.subtitle] - Small description or tagline above/below the title.
 * @param {string} [props.align='center'] - Title alignment: 'center', 'left', 'right'.
 * @param {string} [props.className=''] - Extra classes.
 */
export const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  return (
    <div className={`section-title-wrapper align-${align} fade-up-element ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default SectionTitle;
