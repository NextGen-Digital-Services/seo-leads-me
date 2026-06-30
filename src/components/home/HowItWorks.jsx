import React from 'react';
import { homeContent } from '../../data/websiteContent';
import SectionTitle from '../common/SectionTitle';

export const HowItWorks = () => {
  const { howWeGenerate } = homeContent;

  return (
    <section className="how-it-works section-light" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          title={howWeGenerate.h2}
          subtitle={howWeGenerate.eyebrow}
          align="center"
        />
        
        <p style={{ textAlign: 'center', maxWidth: '700px', margin: '20px auto 50px auto', fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          {howWeGenerate.intro}
        </p>

        <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {howWeGenerate.steps.map((step, idx) => (
            <div key={idx} className="step-card fade-up-element" style={{ background: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid var(--color-border)', position: 'relative', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)' }}>
              <div className="step-number" style={{ position: 'absolute', top: '-20px', left: '30px', background: '#E63A00', color: '#ffffff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {idx + 1}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '10px', marginBottom: '15px', color: 'var(--color-primary)' }}>{step.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
