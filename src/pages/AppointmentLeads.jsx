import React, { useEffect } from 'react';
import { FaCalendarCheck, FaLock, FaCrown, FaCheck, FaPhone, FaSearch, FaEnvelope } from 'react-icons/fa';
import PageHero from '../components/common/PageHero';
import Methodology from '../components/common/Methodology';
import FAQSection from '../components/common/FAQSection';
import TrustCompliance from '../components/common/TrustCompliance';
import LeadCaptureForm from '../components/common/LeadCaptureForm';
import Button from '../components/common/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { appointmentPageContent } from '../data/websiteContent';

export const AppointmentLeads = () => {
  useEffect(() => {
    document.title = appointmentPageContent.meta.title;
  }, []);

  useScrollAnimation();

  const getTierIcon = (idx) => {
    switch (idx) {
      case 0: return <FaCalendarCheck style={{ color: '#E63A00', fontSize: '2.5rem' }} />;
      case 1: return <FaLock style={{ color: '#E63A00', fontSize: '2.5rem' }} />;
      case 2: return <FaCrown style={{ color: '#E63A00', fontSize: '2.5rem' }} />;
      default: return <FaCalendarCheck style={{ color: '#E63A00', fontSize: '2.5rem' }} />;
    }
  };

  return (
    <div className="appointment-leads-page">
      {/* Page Hero */}
      <PageHero
        title={appointmentPageContent.hero.h1}
        subtitle={appointmentPageContent.hero.eyebrow}
        bgImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400"
        breadcrumbs={[{ label: 'Appointment Leads', path: '/appointment-leads' }]}
      />

      {/* Intro section */}
      <section className="section-light" style={{ padding: '60px 0 20px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--color-primary)', fontWeight: 500 }}>
            {appointmentPageContent.hero.body}
          </p>
        </div>
      </section>

      {/* 3 Lead Tiers */}
      <section className="services-section section-light" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="services-section__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {appointmentPageContent.tiers.map((tier, idx) => (
              <div key={idx} className="service-card fade-up-element" style={{ background: '#ffffff', padding: '40px 30px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.01)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div className="service-card__icon" style={{ marginBottom: '20px', display: 'inline-block' }}>
                  {getTierIcon(idx)}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '15px' }}>{tier.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1, marginBottom: '25px' }}>{tier.desc}</p>
                <Button to="#formup" variant="outline" fullWidth>
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <Methodology 
        title={appointmentPageContent.process.h2}
        subtitle={appointmentPageContent.process.eyebrow}
        intro={appointmentPageContent.process.intro}
        steps={appointmentPageContent.process.steps}
      />

      {/* Pricing packages */}
      <section className="pricing section-light" style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              {appointmentPageContent.pricing.h2}
            </h2>
          </div>

          <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {appointmentPageContent.pricing.plans.map((plan, idx) => (
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

      {/* Trust & Compliance */}
      <TrustCompliance />

      {/* FAQ accordion */}
      <FAQSection />

      {/* Lead capture form */}
      <LeadCaptureForm 
        title="Request Free Appointment-Ready Samples"
        subtitle="Complete the vetting profile sheet below. Our calibration specialists will verify availability of pre-screened meetings in your niche."
      />
    </div>
  );
};

export default AppointmentLeads;
