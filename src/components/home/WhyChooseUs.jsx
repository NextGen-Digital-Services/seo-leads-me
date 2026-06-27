import React from 'react';
import Button from '../common/Button';
import './WhyChooseUs.css';

const BULLETS = [
  'Proven strategies that deliver real results',
  'Transparent reporting and communication',
  'Experienced and dedicated team',
  'Focus on long-term business growth'
];

export const WhyChooseUs = () => {
  return (
    <section className="why-choose-us section-light">
      <div className="container why-choose-us-container">
        {/* Left Column: Image */}
        <div className="why-image-wrapper fade-up-element">
          <div className="why-image-accent"></div>
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600"
            alt="Business meeting collaboration"
            className="why-image"
          />
        </div>

        {/* Right Column: Bullets & Text */}
        <div className="why-content fade-up-element">
          <h2 className="why-title">Why Choose SEO Leads Me?</h2>
          <p className="why-description">
            We partner with businesses to unlock their growth potential. By combining analytics with proven optimization techniques, we drive the outcomes that matter most.
          </p>
          <ul className="why-bullets">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="why-bullet-item">
                <span className="bullet-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="bullet-text">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="why-cta">
            <Button to="/about-us" variant="filled">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
