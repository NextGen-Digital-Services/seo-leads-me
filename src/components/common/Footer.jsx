import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { CONTACT_INFO, SOCIAL_LINKS, QUICK_LINKS, FOOTER_SERVICES } from '../../utils/constants';
import './Footer.css';

const SOCIAL_COMPONENTS = {
  Facebook: <FaFacebookF />,
  LinkedIn: <FaLinkedinIn />,
  Twitter: <FaTwitter />,
  Instagram: <FaInstagram />
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
              <span className="logo-name">SEO Leads Me</span>
              <span className="logo-tagline">Generate. Rank. Convert.</span>
            </div>
          </Link>
          <p className="footer-desc">
            SEO Leads Me generates quality leads, improves search rankings, and helps businesses achieve sustainable growth through modern digital marketing strategies.
          </p>
          <div className="footer__social">
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
                <FaPhone />
              </div>
              <p>
                <a href={`tel:${CONTACT_INFO.phoneRaw}`}>{CONTACT_INFO.phone}</a>
              </p>
            </div>
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
                <FaMapMarkerAlt />
              </div>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer__bottom">
        &copy; 2025 SEO Leads Me. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
