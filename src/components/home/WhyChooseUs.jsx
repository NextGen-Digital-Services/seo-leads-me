import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
    <section className="why">
      <div className="why__inner">
        {/* Left Column: Image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600"
          alt="Business meeting collaboration"
          className="why__img fade-up-element"
        />

        {/* Right Column: Bullets & Text */}
        <div className="why__content fade-up-element">
          <h2>Why Choose SEO Leads Me?</h2>
          <p>
            We partner with businesses to unlock their growth potential. By combining analytics with proven optimization techniques, we drive the outcomes that matter most.
          </p>
          <ul className="why__list">
            {BULLETS.map((bullet) => (
              <li key={bullet}>
                <FaCheckCircle />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <Button to="/about-us" variant="filled">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
