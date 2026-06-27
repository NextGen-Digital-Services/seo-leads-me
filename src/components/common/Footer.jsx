import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_LINKS, QUICK_LINKS, FOOTER_SERVICES } from '../../utils/constants';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Col 1: Logo and Brand info */}
        <div className="footer-col footer-col-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">📊</span>
            <div className="logo-text-group">
              <span className="logo-name">SEO Leads Me</span>
              <span className="logo-tagline">Generate. Rank. Convert.</span>
            </div>
          </Link>
          <p className="footer-desc">
            SEO Leads Me generates quality leads, improves search rankings, and helps businesses achieve sustainable growth through modern digital marketing strategies.
          </p>
          <div className="social-icons">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={`Follow us on ${link.name}`}
              >
                <span className="social-icon-text">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
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
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            {FOOTER_SERVICES.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col footer-col-info">
          <h4 className="footer-heading">Contact Info</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon">📞</span>
              <a href={`tel:${CONTACT_INFO.phoneRaw}`}>{CONTACT_INFO.phone}</a>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            &copy; 2025 SEO Leads Me. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
