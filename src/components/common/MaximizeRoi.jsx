import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { maxRoiChecklist } from '../../data/websiteContent';
import SectionTitle from './SectionTitle';

export const MaximizeRoi = ({ type = 'SEO' }) => {
  // Replace generic terminology based on the page type (SEO vs Web Design)
  const getProcessedText = (text) => {
    if (type === 'Web Design') {
      return text
        .replace(/SEO leads/g, 'Web Design leads')
        .replace(/SEO/g, 'Web Design');
    }
    return text;
  };

  return (
    <section className="maximize-roi-section section-light" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <SectionTitle
          title="How to Maximize Your Lead ROI"
          subtitle="Tips & Best Practices to Turn Opportunities into Paying Clients"
          align="center"
        />

        <div className="roi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
          {maxRoiChecklist.map((item, idx) => (
            <div key={idx} className="roi-card fade-up-element" style={{ background: '#ffffff', padding: '25px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.01)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <FaCheckCircle style={{ color: '#28a745', fontSize: '1.25rem', flexShrink: 0 }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  {idx + 1}. {getProcessedText(item.title)}
                </h4>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                {getProcessedText(item.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaximizeRoi;
