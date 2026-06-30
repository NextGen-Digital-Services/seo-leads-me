import React from 'react';
import { FaUserCheck, FaFilter, FaExchangeAlt, FaBriefcase } from 'react-icons/fa';
import { homeContent } from '../../data/websiteContent';
import SectionTitle from './SectionTitle';
import './Methodology.css';

export const Methodology = ({ 
  title = "Our Acquisition Methodology", 
  subtitle = "Rigorous Verification Engine", 
  intro = "We combine database intelligence, active validation, and real-time routing to ensure your team receives high-performing pipeline assets.",
  steps = homeContent.howWeGenerate.steps
}) => {
  const getStepIcon = (idx) => {
    switch (idx) {
      case 0: return <FaUserCheck />;
      case 1: return <FaFilter />;
      case 2: return <FaExchangeAlt />;
      case 3: return <FaBriefcase />;
      default: return <FaUserCheck />;
    }
  };

  return (
    <section className="methodology-section section-light" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)', background: '#f8fafc' }}>
      <div className="container">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          align="center"
        />
        
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '20px auto 50px auto', fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          {intro}
        </p>

        <div className="methodology-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {steps.map((step, idx) => (
            <div key={idx} className="methodology-card fade-up-element" style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '8px', border: '1px solid var(--color-border)', position: 'relative', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)' }}>
              <div className="methodology-icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', background: 'rgba(230, 58, 0, 0.08)', color: '#E63A00', borderRadius: '50%', fontSize: '1.5rem', marginBottom: '20px' }}>
                {getStepIcon(idx)}
              </div>
              <div className="step-badge" style={{ position: 'absolute', top: '30px', right: '30px', color: 'var(--color-border-dark)', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, opacity: 0.1 }}>
                {`0${idx + 1}`}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '15px', color: 'var(--color-primary)' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
