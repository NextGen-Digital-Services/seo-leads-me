import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaFacebookF, FaTwitter, FaYoutube, FaEnvelope, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { CONTACT_INFO, SOCIAL_LINKS, QUICK_LINKS, FOOTER_SERVICES } from '../../utils/constants';
import './Footer.css';

const SOCIAL_COMPONENTS = {
  Facebook: <FaFacebookF />,
  Twitter: <FaTwitter />,
  YouTube: <FaYoutube />
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Col 1: Logo and Brand info */}
        <div className="footer-col footer-col-brand">
          <Link to="/" className="footer-logo">
            <FaChartBar style={{ color: '#E63A00', fontSize: '1.8rem' }} />
            <div className="logo-text-group">
              <span className="logo-name">SEOLeads.me</span>
              <span className="logo-tagline">{CONTACT_INFO.tagline}</span>
            </div>
          </Link>
          <p className="footer-desc" style={{ fontSize: '0.9rem', lineHeight: '1.5', margin: '15px 0' }}>
            {CONTACT_INFO.aboutBlurb}
          </p>
          <div className="footer__social" style={{ display: 'flex', gap: '10px' }}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${link.name}`}
              >
                {SOCIAL_COMPONENTS[link.name] || <FaChartBar />}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Our Services */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="footer-links">
            {FOOTER_SERVICES.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <div className="footer-contact-list">
            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <FaEnvelope />
              </div>
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </p>
            </div>
            
            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <FaCalendarAlt />
              </div>
              <p>
                <a href={CONTACT_INFO.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Book a Meeting
                </a>
              </p>
            </div>

            <div className="footer__contact-item">
              <div className="footer__contact-icon">
                <FaClock />
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Response time: {CONTACT_INFO.responseTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Insights footer block */}
      <div className="footer-notes-row" style={{ maxWidth: '1200px', margin: '0 auto', padding: '30px 40px', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85rem', color: '#94a3b8', lineHeight: '1.6' }}>
        <div>
          <p><strong>Confidence:</strong> {CONTACT_INFO.trustQuote}</p>
          <p style={{ marginTop: '10px' }}>{CONTACT_INFO.updateInsights}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#E63A00' }}>
            {CONTACT_INFO.buildTagline}
          </span>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer__bottom" style={{ textAlign: 'center', padding: '25px 0' }}>
        {CONTACT_INFO.copyright}
      </div>
    </footer>
  );
};

export default Footer;
