import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';
import './ContactInfo.css';

export const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper fade-up-element">
      <h3 className="info-heading">Contact Information</h3>
      <p className="info-subtext">
        Get in touch with us using any of the channels below. We look forward to connecting with you.
      </p>

      {/* Info List */}
      <div className="info-list">
        {/* Phone */}
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <FaPhone />
          </div>
          <div className="info-text-block">
            <span className="info-label">Phone</span>
            <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="info-value">
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <FaEnvelope />
          </div>
          <div className="info-text-block">
            <span className="info-label">Email</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="info-value">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="info-text-block">
            <span className="info-label">Address</span>
            <span className="info-value-text">
              {CONTACT_INFO.address}, USA
            </span>
          </div>
        </div>

        {/* Business Hours */}
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <FaClock />
          </div>
          <div className="info-text-block">
            <span className="info-label">Business Hours</span>
            <span className="info-value-text">{CONTACT_INFO.hours}</span>
          </div>
        </div>
      </div>

      {/* Google Map iframe */}
      <div className="contact-map">
        <iframe
          src={CONTACT_INFO.addressUrl}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="SEO Leads Me Office Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
