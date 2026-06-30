import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import BookCallSection from '../components/common/BookCallSection';
import NewsletterBlock from '../components/contact/NewsletterBlock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactPageContent } from '../data/websiteContent';

export const ContactUs = () => {
  useEffect(() => {
    document.title = contactPageContent.meta.title;
  }, []);

  useScrollAnimation();

  return (
    <div className="contact-us-page">
      {/* Page Hero */}
      <PageHero
        title={contactPageContent.hero.h1}
        subtitle={contactPageContent.hero.subhead}
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

      {/* Book a Strategy Call Section */}
      <BookCallSection />

      {/* Newsletter Discount Block */}
      <NewsletterBlock />
    </div>
  );
};

export default ContactUs;
