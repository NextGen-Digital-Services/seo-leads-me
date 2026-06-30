import React from 'react';
import { FaSearch, FaLaptop, FaCalendarCheck, FaShareAlt, FaBullhorn, FaMobileAlt } from 'react-icons/fa';
import { homeContent } from '../../data/websiteContent';
import SectionTitle from '../common/SectionTitle';
import './FeaturesRow.css';

const ICON_MAP = {
  'SEO Leads': <FaSearch />,
  'Web Designing Leads': <FaLaptop />,
  'Appointment Leads': <FaCalendarCheck />,
  'SMO Leads': <FaShareAlt />,
  'PPC Leads': <FaBullhorn />,
  'Application Development Leads': <FaMobileAlt />
};

export const FeaturesRow = () => {
  const { services } = homeContent;

  return (
    <section className="features section-light" style={{ padding: '80px 0' }}>
      <div className="container">
        <SectionTitle 
          title="Services We Offer" 
          subtitle="Pick Your Niche. We'll Deliver the Buyers." 
          align="center"
        />
        <div className="features__grid" style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {services.map((svc) => (
            <div key={svc.title} className="features__card fade-up-element" style={{ background: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
              <div className="icon-circle" style={{ marginBottom: '20px' }}>
                {ICON_MAP[svc.title] || <FaSearch />}
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesRow;
