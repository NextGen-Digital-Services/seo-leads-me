import React from 'react';
import Button from '../common/Button';
import OurValues from './OurValues';
import './WhoWeAre.css';

export const WhoWeAre = () => {
  return (
    <section className="who">
      <div className="who__inner">
        {/* Left Column - Brand Info */}
        <div className="who__left fade-up-element">
          <h2>Who We Are</h2>
          <p>
            SEO Leads Me is a results-driven digital marketing and SEO agency focused on helping businesses grow through innovative strategies and data-driven solutions.
          </p>
          <p>
            Our mission is to deliver measurable results by increasing visibility, generating quality leads and maximizing ROI. We take pride in building marketing funnels that produce sustainable traffic.
          </p>
          <div style={{ marginTop: '30px' }}>
            <Button to="/contact-us" variant="filled">
              Get to Know Us
            </Button>
          </div>
        </div>

        {/* Right Column - Core Values */}
        <div className="who__right fade-up-element">
          <OurValues />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
