import React from 'react';
import Button from '../common/Button';
import OurValues from './OurValues';
import './WhoWeAre.css';

export const WhoWeAre = () => {
  return (
    <section className="who-we-are section-light">
      <div className="container who-we-are-container">
        {/* Left Column - Brand Info */}
        <div className="who-left-content fade-up-element">
          <h2 className="who-heading">Who We Are</h2>
          <p className="who-paragraph">
            SEO Leads Me is a results-driven digital marketing and SEO agency focused on helping businesses grow through innovative strategies and data-driven solutions.
          </p>
          <p className="who-paragraph">
            Our mission is to deliver measurable results by increasing visibility, generating quality leads and maximizing ROI. We take pride in building marketing funnels that produce sustainable traffic.
          </p>
          <div className="who-cta">
            <Button to="/contact-us" variant="filled">
              Get to Know Us
            </Button>
          </div>
        </div>

        {/* Right Column - Dark Values Card */}
        <div className="fade-up-element">
          <OurValues />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
