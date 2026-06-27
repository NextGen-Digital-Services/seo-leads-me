import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import ServicesGrid from '../components/seo/ServicesGrid';
import MarketingProcess from '../components/seo/MarketingProcess';
import CTABanner from '../components/common/CTABanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const SeoLeads = () => {
  useEffect(() => {
    document.title = 'SEO Leads Me | SEO & Marketing Services';
  }, []);

  useScrollAnimation();

  return (
    <div className="seo-leads-page">
      {/* Page Hero with custom background */}
      <PageHero
        title="Our Marketing Services"
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400"
        breadcrumbs={[{ label: 'Marketing', path: '/seo-leads' }]}
      />

      {/* Services grid (white bg) */}
      <ServicesGrid />

      {/* Proven Marketing Process (dark navy bg) */}
      <MarketingProcess />

      {/* CTA Banner (red-orange accent bg) */}
      <CTABanner
        title="Want More Leads and Better Rankings?"
        subtitle="Let's grow your business together."
        buttonText="Get Free Consultation"
        buttonLink="/contact-us"
        variant="accent"
        showIcon={true}
      />
    </div>
  );
};

export default SeoLeads;
