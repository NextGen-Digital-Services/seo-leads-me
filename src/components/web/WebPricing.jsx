import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { webPageContent } from '../../data/websiteContent';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

export const WebPricing = () => {
  const { pricing } = webPageContent;

  return (
    <section className="pricing section-light" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          title={pricing.h2}
          subtitle="Plans Built to Close!"
          align="center"
        />

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '50px' }}>
          {pricing.plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`pricing-card fade-up-element ${plan.popular ? 'pricing-card-popular' : ''}`}
              style={{
                background: '#ffffff',
                padding: '40px 30px',
                borderRadius: '12px',
                border: plan.popular ? '2px solid #E63A00' : '1px solid var(--color-border)',
                boxShadow: plan.popular ? '0 10px 30px rgba(230, 58, 0, 0.1)' : '0 4px 6px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: plan.popular ? 'scale(1.03)' : 'none',
                zIndex: plan.popular ? 2 : 1
              }}
            >
              {plan.popular && (
                <span style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#E63A00',
                  color: '#ffffff',
                  padding: '4px 15px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Most Popular
                </span>
              )}

              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '10px' }}>
                {plan.name}
              </h3>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', minHeight: '40px', lineHeight: '1.4' }}>
                {plan.desc}
              </p>

              <div className="price-wrapper" style={{ margin: '20px 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: plan.popular ? '#E63A00' : 'var(--color-primary)' }}>
                  {plan.price}
                </span>
              </div>

              <ul className="plan-details-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                {plan.items.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', lineHeight: '1.4' }}>
                    <FaCheck style={{ color: '#E63A00', flexShrink: 0, marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button to="#formup" variant={plan.popular ? 'filled' : 'outline'} fullWidth>
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPricing;
