import React from 'react';
import { aboutContent } from '../../data/websiteContent';
import SectionTitle from '../common/SectionTitle';
import { FaCheckCircle, FaAward, FaFilter, FaVolumeUp } from 'react-icons/fa';
import Button from '../common/Button';

export const ShowUpRateSection = () => {
  const { stats, conversations, noFiller } = aboutContent;

  const getNoFillerIcon = (idx) => {
    switch (idx) {
      case 0: return <FaAward style={{ color: '#E63A00', fontSize: '1.5rem' }} />;
      case 1: return <FaFilter style={{ color: '#E63A00', fontSize: '1.5rem' }} />;
      case 2: return <FaVolumeUp style={{ color: '#E63A00', fontSize: '1.5rem' }} />;
      default: return <FaAward style={{ color: '#E63A00', fontSize: '1.5rem' }} />;
    }
  };

  return (
    <section className="show-up-rate-section section-light" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          title="How We're Different"
          subtitle="Real Results. Pure ROI."
          align="center"
        />

        {/* 4 Stats Cards */}
        <div className="different-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginTop: '40px' }}>
          {stats.map((stat, idx) => (
            <div key={idx} className="diff-stat-card fade-up-element" style={{ background: '#ffffff', padding: '30px 24px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.01)', textAlign: 'center' }}>
              <span className="diff-stat-percentage" style={{ fontSize: '3rem', fontWeight: 800, color: '#E63A00', display: 'block', marginBottom: '10px' }}>
                {stat.percentage}
              </span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '10px' }}>
                {stat.title}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Leads That Show Up list */}
        <div className="show-up-leads-block" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-eyebrow" style={{ display: 'inline-block', color: '#E63A00', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', fontSize: '0.85rem' }}>
              {conversations.eyebrow}
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              Leads That Show Up, Speak Up, and Sign On
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '15px auto 0 auto' }}>
              {conversations.intro}
            </p>
          </div>

          <div className="conversations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {conversations.items.map((item, idx) => (
              <div key={idx} className="conv-card fade-up-element" style={{ background: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <FaCheckCircle style={{ color: '#28a745', fontSize: '1.2rem', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* No Filler. Just Real Leads. */}
        <div className="no-filler-block" style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid var(--color-border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="section-eyebrow" style={{ display: 'inline-block', color: '#E63A00', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', fontSize: '0.85rem' }}>
              {noFiller.eyebrow}
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-primary)' }}>
              No Filler. Just Real Leads.
            </h2>
          </div>

          <div className="no-filler-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            {noFiller.cards.map((card, idx) => (
              <div key={idx} className="no-filler-card fade-up-element" style={{ background: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid var(--color-border)', boxShadow: '0 4px 6px rgba(0,0,0,0.01)' }}>
                <div className="no-filler-icon-wrapper" style={{ background: 'rgba(230, 58, 0, 0.08)', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  {getNoFillerIcon(idx)}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '12px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button to="#formup" variant="filled">
              Discover More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowUpRateSection;
