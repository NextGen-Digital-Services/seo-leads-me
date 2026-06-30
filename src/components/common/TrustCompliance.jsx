import React from 'react';
import { FaShieldAlt, FaLock, FaUserCheck } from 'react-icons/fa';
import { complianceContent } from '../../data/websiteContent';
import SectionTitle from './SectionTitle';
import './TrustCompliance.css';

export const TrustCompliance = () => {
  const { title, subtitle, intro, blocks } = complianceContent;

  const getComplianceIcon = (idx) => {
    switch (idx) {
      case 0: return <FaLock />;
      case 1: return <FaShieldAlt />;
      case 2: return <FaUserCheck />;
      default: return <FaShieldAlt />;
    }
  };

  return (
    <section className="trust-compliance-section section-light" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '20px auto 50px auto', fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          {intro}
        </p>

        <div className="compliance-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {blocks.map((block, idx) => (
            <div key={idx} className="compliance-card fade-up-element" style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.01)', position: 'relative' }}>
              <div className="compliance-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', background: 'rgba(230, 58, 0, 0.08)', color: '#E63A00', borderRadius: '50%', fontSize: '1.5rem', marginBottom: '20px' }}>
                {getComplianceIcon(idx)}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '15px', color: 'var(--color-primary)' }}>
                {block.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                {block.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustCompliance;
