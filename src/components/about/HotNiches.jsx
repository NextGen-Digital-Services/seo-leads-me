import React from 'react';
import * as Icons from 'react-icons/fa';
import { aboutContent } from '../../data/websiteContent';
import SectionTitle from '../common/SectionTitle';

export const HotNiches = () => {
  const { niches } = aboutContent;

  return (
    <section className="hot-niches section-light" style={{ padding: '80px 0', background: '#f8fafc', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <SectionTitle
          title="Industry Verticals We Support"
          subtitle="Proven Pipelines with Confirmed Conversion Velocity"
          align="center"
        />

        <div 
          className="niches-grid fade-up-element" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
            gap: '20px', 
            marginTop: '50px' 
          }}
        >
          {niches.map((niche, idx) => {
            // Dynamically resolve Fa icon component
            const IconComponent = Icons[niche.icon] || Icons.FaBriefcase;
            return (
              <div 
                key={idx} 
                className="niche-card" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  background: '#ffffff', 
                  padding: '16px 20px', 
                  borderRadius: '8px', 
                  border: '1px solid var(--color-border)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#E63A00';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(230, 58, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.01)';
                }}
              >
                <span style={{ color: '#E63A00', fontSize: '1.25rem', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                  <IconComponent />
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  {niche.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotNiches;
