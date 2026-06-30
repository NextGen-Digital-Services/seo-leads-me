import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import ServicesGrid from '../components/seo/ServicesGrid';
import MaximizeRoi from '../components/common/MaximizeRoi';
import SeoPricing from '../components/seo/SeoPricing';
import TrustCompliance from '../components/common/TrustCompliance';
import FAQSection from '../components/common/FAQSection';
import LeadCaptureForm from '../components/common/LeadCaptureForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { seoPageContent } from '../data/websiteContent';

export const SeoLeads = () => {
  useEffect(() => {
    document.title = seoPageContent.meta.title;
  }, []);

  useScrollAnimation();

  return (
    <div className="seo-leads-page">
      {/* Page Hero */}
      <PageHero
        title={seoPageContent.hero.h1}
        subtitle={seoPageContent.hero.eyebrow}
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400"
        breadcrumbs={[{ label: 'SEO Leads', path: '/seo-leads' }]}
      />

      {/* Paragraph intro under Hero */}
      <section className="section-light" style={{ padding: '60px 0 20px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '20px' }}>
            {seoPageContent.hero.body1}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
            {seoPageContent.hero.body2}
          </p>
        </div>
      </section>

      {/* Services Grid (3 Lead Tiers) */}
      <ServicesGrid />

      {/* ROI Optimization Checklist */}
      <MaximizeRoi type="SEO" />

      {/* SEO Package Pricing */}
      <SeoPricing />

      {/* Trust and Compliance rules */}
      <TrustCompliance />

      {/* FAQ section */}
      <FAQSection />

      {/* Shared Lead Capture Form (#formup) */}
      <LeadCaptureForm 
        title="Request Free SEO Lead Samples"
        subtitle="Complete target parameters profiling. Vetting checks apply."
      />
    </div>
  );
};

export default SeoLeads;
