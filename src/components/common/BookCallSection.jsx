import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import Button from './Button';

export const BookCallSection = () => {
  return (
    <section className="book-call-section" style={{ padding: '80px 0', background: 'var(--color-primary, #0f172a)', color: '#ffffff', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="book-call-icon" style={{ color: '#E63A00', fontSize: '3rem', marginBottom: '20px' }}>
          <FaCalendarAlt />
        </div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '20px', color: '#ffffff' }}>
          📅 Book Your Free Strategy Call
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '35px', lineHeight: '1.6' }}>
          No hard pitch. Just real strategies, real results — and how we deliver leads that outperform Meta & Google Ads.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Button 
            to={CONTACT_INFO.calendlyUrl} 
            variant="filled" 
            onClick={(e) => {
              e.preventDefault();
              window.open(CONTACT_INFO.calendlyUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            Book a Meeting on Calendly
          </Button>
          <Button to="#formup" variant="outline">
            Or Get Free Samples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
