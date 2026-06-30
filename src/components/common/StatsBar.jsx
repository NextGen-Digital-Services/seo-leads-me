import React from 'react';
import { FaUserPlus, FaDollarSign, FaChartLine, FaStar } from 'react-icons/fa';
import { homeContent } from '../../data/websiteContent';
import './StatsBar.css';

export const StatsBar = () => {
  const { stats } = homeContent;

  const STATS_ITEMS = [
    { value: stats.leadsGenerated, label: 'Client leads generated', icon: <FaUserPlus /> },
    { value: stats.revenueGenerated, label: 'Client revenue generated', icon: <FaDollarSign /> },
    { value: stats.pipelineGenerated, label: 'Client pipeline generated', icon: <FaChartLine /> },
    { value: stats.rating, label: 'Rating on Clutch & Google', icon: <FaStar /> }
  ];

  return (
    <section className="stats" style={{ padding: '60px 0', background: 'var(--color-primary, #0f172a)', color: '#ffffff' }}>
      <div className="container">
        <div className="stats__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
          {STATS_ITEMS.map((stat, idx) => (
            <div key={idx} className="stats__item fade-up-element" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="stat-icon-wrapper" style={{ color: '#E63A00', fontSize: '2rem', marginBottom: '15px' }}>
                {stat.icon}
              </div>
              <span className="stats__number" style={{ fontSize: '3rem', fontWeight: 800, display: 'block', marginBottom: '5px' }}>{stat.value}</span>
              <span className="stats__label" style={{ fontSize: '0.9rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</span>
            </div>
          ))}
        </div>
        
        {/* Quote sub-section */}
        <div className="stats__quote-wrapper fade-up-element" style={{ marginTop: '50px', textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #1e293b' }}>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 500, color: '#e2e8f0', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            {stats.quote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
