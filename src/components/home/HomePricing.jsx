import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { homeContent } from '../../data/websiteContent';
import Button from '../common/Button';
import SectionTitle from '../common/SectionTitle';

export const HomePricing = () => {
  const { pricing } = homeContent;

  return (
    <section className="pricing section-light" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          title={pricing.h2}
          subtitle={pricing.eyebrow}
          align="center"
        />

        <p style={{ textAlign: 'center', maxWidth: '750px', margin: '20px auto 50px auto', fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
          {pricing.intro}
        </p>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
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

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '10px' }}>
                {plan.name}
              </h3>
              
              <div className="price-wrapper" style={{ margin: '20px 0' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: plan.popular ? '#E63A00' : 'var(--color-primary)' }}>
                  {plan.price}
                </span>
              </div>

              <ul className="plan-details-list" style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem' }}>
                  <FaCheck style={{ color: '#E63A00', flexShrink: 0, marginTop: '4px' }} />
                  <span><strong>{plan.frequency}</strong> volume limit</span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem' }}>
                  <FaCheck style={{ color: '#E63A00', flexShrink: 0, marginTop: '4px' }} />
                  <span>Setup: <strong>{plan.setup}</strong></span>
                </li>
                <li style={{ display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                  <FaCheck style={{ color: '#E63A00', flexShrink: 0, marginTop: '4px' }} />
                  <span>{plan.notes}</span>
                </li>
              </ul>

              <Button to="#formup" variant={plan.popular ? 'filled' : 'outline'} fullWidth>
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Global inclusion features list */}
        <div className="pricing-inclusions fade-up-element" style={{ marginTop: '60px', background: '#ffffff', padding: '30px 40px', borderRadius: '8px', border: '1px solid var(--color-border)', textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            All plans include:
          </h4>
          <div className="inclusions-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px 40px' }}>
            {pricing.includes.map((inc, index) => (
              <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', fontWeight: 500 }}>
                <FaCheck style={{ color: '#28a745' }} /> {inc}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomePricing;
