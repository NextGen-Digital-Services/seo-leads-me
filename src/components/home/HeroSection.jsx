import React from 'react';
import Button from '../common/Button';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="home-hero">
      <div className="container home-hero-container">
        {/* Left Side Content (60%) */}
        <div className="hero-content fade-up-element">
          <div className="hero-title-group">
            <h1 className="hero-title-line">Drive More Leads.</h1>
            <h1 className="hero-title-line">Rank Higher.</h1>
            <h1 className="hero-title-line line-highlight">Grow Faster.</h1>
          </div>
          <p className="hero-subtext">
            We are a full-service digital marketing and SEO lead generation agency that helps businesses generate quality leads and achieve sustainable growth.
          </p>
          <div className="hero-cta-group">
            <Button to="/seo-leads" variant="filled">
              Our Services
            </Button>
            <Button to="/contact-us" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right Side Image (40%) */}
        <div className="hero-image-wrapper fade-up-element">
          <div className="image-clip-container">
            <div className="image-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700"
              alt="Professional business team collaborating"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
