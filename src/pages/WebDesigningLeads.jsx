import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import WebServicesGrid from '../components/web/WebServicesGrid';
import DesignProcess from '../components/web/DesignProcess';
import CTABanner from '../components/common/CTABanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const WebDesigningLeads = () => {
  useEffect(() => {
    document.title = 'SEO Leads Me | Web Designing Leads';
  }, []);

  useScrollAnimation();

  return (
    <div className="web-designing-leads-page">
      {/* Page Hero with custom background */}
      <PageHero
        title="Web Designing Leads"
        bgImage="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1400"
        breadcrumbs={[{ label: 'Web Designing Leads', path: '/web-designing-leads' }]}
      />

      {/* Services Grid (white bg) */}
      <section className="section-light">
        <div className="container">
          <WebServicesGrid />
        </div>
      </section>

      {/* Design Process (dark navy bg) */}
      <DesignProcess />

      {/* CTA Banner (red-orange accent bg) */}
      <CTABanner
        title="Ready for a Website That Converts?"
        subtitle="Let's build something amazing together."
        buttonText="Get Free Consultation"
        buttonLink="/contact-us"
        variant="accent"
      />
    </div>
  );
};

export default WebDesigningLeads;
