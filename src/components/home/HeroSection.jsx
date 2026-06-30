import React from 'react';
import Button from '../common/Button';
import { homeContent } from '../../data/websiteContent';
import './HeroSection.css';

export const HeroSection = () => {
  const { hero } = homeContent;
  
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__left animate-fade-in-left">
          <span className="hero-eyebrow" style={{ display: 'inline-block', color: '#E63A00', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '15px', fontSize: '0.9rem' }}>
            {hero.eyebrow}
          </span>
          <h1>{hero.h1}</h1>
          <p>{hero.subtext}</p>
          <div className="hero__btns">
            <Button to="#formup" variant="filled">Get Started Now</Button>
            <Button to="/about-us" variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="hero__right animate-fade-in-right">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800" alt="Exclusive Leads" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
