import React from 'react';
import { FaBullseye, FaChartLine, FaClock } from 'react-icons/fa';
import { homeContent } from '../../data/websiteContent';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

export const SaveTime = () => {
  const { saveTime } = homeContent;

  const getFeatureIcon = (idx) => {
    switch (idx) {
      case 0: return <FaBullseye />;
      case 1: return <FaChartLine />;
      case 2: return <FaClock />;
      default: return <FaBullseye />;
    }
  };

  return (
    <section className="save-time section-light" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="save-time-layout" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left: General details and CTA */}
          <div className="save-time-left fade-up-element">
            <span className="section-eyebrow" style={{ display: 'inline-block', color: '#E63A00', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', fontSize: '0.85rem' }}>
              {saveTime.eyebrow}
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '10px', lineHeight: '1.3' }}>
              {saveTime.h2}
            </h2>
            <h4 style={{ fontSize: '1.2rem', color: '#E63A00', fontWeight: 600, marginBottom: '20px' }}>
              {saveTime.subhead}
            </h4>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-muted)', marginBottom: '30px' }}>
              {saveTime.body}
            </p>
            <Button to="#formup" variant="filled">
              Schedule a Meet
            </Button>
          </div>

          {/* Right: 3 feature cards */}
          <div className="save-time-right" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {saveTime.featureCards.map((card, idx) => (
              <div key={idx} className="save-time-card fade-up-element" style={{ display: 'flex', gap: '20px', background: '#ffffff', padding: '24px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div className="feature-icon" style={{ background: 'rgba(230, 58, 0, 0.08)', color: '#E63A00', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                  {getFeatureIcon(idx)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: 'var(--color-primary)' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SaveTime;
