import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import ShowUpRateSection from '../components/about/ShowUpRateSection';
import HotNiches from '../components/about/HotNiches';
import Methodology from '../components/common/Methodology';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TrustCompliance from '../components/common/TrustCompliance';
import FAQSection from '../components/common/FAQSection';
import BookCallSection from '../components/common/BookCallSection';
import LeadCaptureForm from '../components/common/LeadCaptureForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { aboutContent } from '../data/websiteContent';

export const AboutUs = () => {
  useEffect(() => {
    document.title = aboutContent.meta.title;
  }, []);

  useScrollAnimation();

  return (
    <div className="about-us-page">
      {/* Page Hero */}
      <PageHero
        title={aboutContent.hero.h2}
        subtitle={aboutContent.hero.tagline}
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400"
        breadcrumbs={[{ label: 'About Us', path: '/about-us' }]}
      />

      {/* Main intro paragraph under Hero */}
      <section className="section-light" style={{ padding: '60px 0 20px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '20px' }}>
            {aboutContent.hero.body1}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--color-text-muted)', marginBottom: '15px' }}>
            {aboutContent.hero.body2}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
            {aboutContent.hero.body3}
          </p>
        </div>
      </section>

      {/* How We're Different Stats + Show Up list + No Filler */}
      <ShowUpRateSection />

      {/* 29 Hot Niches */}
      <HotNiches />

      {/* Methodology Section */}
      <Methodology />

      {/* Corporate Profile (reused WhyChooseUs component) */}
      <WhyChooseUs />

      {/* Trust and compliance policies */}
      <TrustCompliance />

      {/* FAQ accordion */}
      <FAQSection />

      {/* Strategy Call Callout */}
      <BookCallSection />

      {/* Lead Capture Form Target */}
      <LeadCaptureForm 
        title="Request Free Samples"
        subtitle="Vetting profile sheet. Complete below to receive sample pipeline assets."
      />
    </div>
  );
};

export default AboutUs;
