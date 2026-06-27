import React from 'react';
import Button from '../common/Button';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left">
          <h1>Drive More Leads.<br/>Rank Higher.<br/><span>Grow Faster.</span></h1>
          <p>We are a full-service digital marketing and SEO lead generation agency that helps businesses generate quality leads and achieve sustainable growth.</p>
          <div className="hero__btns">
            <Button to="/seo-leads" variant="filled">Our Services</Button>
            <Button to="/contact-us" variant="outline">Contact Us</Button>
          </div>
        </div>
        <div className="hero__right">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" alt="team" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
