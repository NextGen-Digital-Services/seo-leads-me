import React from 'react';
import { FaEnvelope, FaClock, FaCheckCircle, FaQuestionCircle } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import { contactPageContent } from '../../data/websiteContent';
import './ContactInfo.css';

export const ContactInfo = () => {
  const { afterReachOut, needSpecific } = contactPageContent;

  return (
    <div className="contact-info-wrapper fade-up-element" style={{ background: '#ffffff', padding: '30px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
      <h3 className="info-heading">Contact Details</h3>
      
      {/* Email and Response Time */}
      <div className="info-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '35px' }}>
        <div className="contact-info-item" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <div className="contact-info-icon" style={{ background: 'rgba(230, 58, 0, 0.08)', color: '#E63A00', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaEnvelope />
          </div>
          <div className="info-text-block">
            <span className="info-label" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Email</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="info-value" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#E63A00', textDecoration: 'none' }}>
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="contact-info-item" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <div className="contact-info-icon" style={{ background: 'rgba(230, 58, 0, 0.08)', color: '#E63A00', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaClock />
          </div>
          <div className="info-text-block">
            <span className="info-label" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Response Time</span>
            <span className="info-value-text" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)' }}>
              {CONTACT_INFO.responseTime}
            </span>
          </div>
        </div>
      </div>

      {/* What Happens After You Reach Out */}
      <div className="after-reach-out" style={{ marginBottom: '35px', paddingTop: '25px', borderTop: '1px solid var(--color-border)' }}>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '15px' }}>
          {afterReachOut.title}
        </h4>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {afterReachOut.items.map((item, idx) => (
            <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.5' }}>
              <FaCheckCircle style={{ color: '#28a745', marginTop: '4px', flexShrink: 0 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Need Something Specific */}
      <div className="need-specific" style={{ paddingTop: '25px', borderTop: '1px solid var(--color-border)' }}>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FaQuestionCircle style={{ color: '#E63A00' }} /> {needSpecific.title}
        </h4>
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
          {needSpecific.text}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
