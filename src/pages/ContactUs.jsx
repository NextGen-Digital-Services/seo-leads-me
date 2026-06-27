import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const ContactUs = () => {
  useEffect(() => {
    document.title = 'SEO Leads Me | Contact Us';
  }, []);

  useScrollAnimation();

  return (
    <div className="contact-us-page">
      {/* Page Hero with custom background */}
      <PageHero
        title="Contact Us"
        bgImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400"
        breadcrumbs={[{ label: 'Contact Us', path: '/contact-us' }]}
      />

      {/* Main Contact Section (white bg) */}
      <section className="contact-section">
        <div className="contact-inner">
          {/* Left Column: Form */}
          <ContactForm />

          {/* Right Column: Details & Map */}
          <ContactInfo />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
