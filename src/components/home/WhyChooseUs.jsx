import React from 'react';
import { FaCheckCircle, FaShieldAlt, FaLaptopCode, FaCalendarCheck } from 'react-icons/fa';
import Button from '../common/Button';
import { homeContent } from '../../data/websiteContent';
import './WhyChooseUs.css';

export const WhyChooseUs = () => {
  const { whoWeAre } = homeContent;

  const getCardIcon = (index) => {
    switch(index) {
      case 0: return <FaShieldAlt style={{ color: '#E63A00', fontSize: '2rem' }} />;
      case 1: return <FaLaptopCode style={{ color: '#E63A00', fontSize: '2rem' }} />;
      case 2: return <FaCalendarCheck style={{ color: '#E63A00', fontSize: '2rem' }} />;
      default: return <FaShieldAlt style={{ color: '#E63A00', fontSize: '2rem' }} />;
    }
  };

  return (
    <section className="why section-light" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        {/* Row 1: Who We Are text and Trust Cards */}
        <div className="why__inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <div className="why__content fade-up-element">
            <span className="section-eyebrow" style={{ display: 'inline-block', color: '#E63A00', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', fontSize: '0.85rem' }}>
              {whoWeAre.eyebrow}
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', color: 'var(--color-primary)' }}>{whoWeAre.h2}</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '30px' }}>
              {whoWeAre.body}
            </p>
            <Button to="#formup" variant="filled">
              Get Started Now
            </Button>
          </div>

          <div className="why__trust-cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            {whoWeAre.trustCards.map((card, idx) => (
              <div key={card.title} className="trust-card fade-up-element" style={{ display: 'flex', gap: '20px', background: '#ffffff', padding: '24px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div className="trust-card-icon-wrapper" style={{ flexShrink: 0 }}>
                  {getCardIcon(idx)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-primary)' }}>{card.title}</h4>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Sub-block "No more wasting your time..." & 7 Value Points */}
        <div className="garbage-leads-section" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--color-border)', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
          <div className="garbage-leads-text fade-up-element">
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '20px', lineHeight: '1.4' }}>
              {whoWeAre.garbageLeadsTitle}
            </h3>
            <blockquote style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', borderLeft: '4px solid #E63A00', paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
              {whoWeAre.garbageLeadsBody}
            </blockquote>
          </div>

          <div className="value-points-list fade-up-element">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {whoWeAre.valuePoints.map((point, index) => {
                const parts = point.split(' — ');
                return (
                  <li key={index} style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                    <FaCheckCircle style={{ color: '#28a745', marginTop: '4px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-primary)' }}>
                      <strong>{parts[0]}</strong> {parts[1] ? `— ${parts[1]}` : ''}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
