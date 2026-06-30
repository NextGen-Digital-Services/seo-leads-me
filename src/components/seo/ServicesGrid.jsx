import React from 'react';
import * as Icons from 'react-icons/fa';
import { seoPageContent } from '../../data/websiteContent';
import Button from '../common/Button';
import './ServicesGrid.css';

export const ServicesGrid = () => {
  const { tiers } = seoPageContent;

  return (
    <section className="services-section section-light" style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="services-section__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {tiers.map((tier, idx) => {
            const IconComponent = Icons[tier.badge] || Icons.FaSearch;
            return (
              <div key={idx} className="service-card fade-up-element" style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="service-card__icon" style={{ color: '#E63A00', fontSize: '2.5rem', marginBottom: '20px', display: 'inline-block' }}>
                  <IconComponent />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '15px' }}>{tier.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1, marginBottom: '25px' }}>{tier.desc}</p>
                <Button to="#formup" variant="outline" fullWidth>
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
