import React from 'react';
import { FaRocket } from 'react-icons/fa';
import Button from './Button';
import './CTABanner.css';

/**
 * Reusable CTA Banner component.
 * @param {Object} props
 * @param {string} props.title - Main headline.
 * @param {string} props.subtitle - Underline supporting sentence.
 * @param {string} [props.buttonText="Get Free Consultation"] - CTA button label.
 * @param {string} [props.buttonLink="/contact-us"] - Path navigation link.
 * @param {string} [props.variant="dark"] - Visual theme: 'dark' (navy bg) or 'accent' (red-orange bg).
 * @param {boolean} [props.showIcon=false] - If true, displays the rocket icon at the top.
 */
export const CTABanner = ({
  title,
  subtitle,
  buttonText = 'Get Free Consultation',
  buttonLink = '/contact-us',
  variant = 'dark',
  showIcon = false
}) => {
  return (
    <section className={`cta-banner cta-variant-${variant} fade-up-element`}>
      <div className="container cta-container">
        {showIcon && <div className="cta-icon"><FaRocket /></div>}
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        <div className="cta-button-wrapper">
          <Button
            to={buttonLink}
            variant={variant === 'accent' ? 'outline' : 'filled'}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
