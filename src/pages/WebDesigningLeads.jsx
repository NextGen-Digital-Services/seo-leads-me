import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import WebServicesGrid from '../components/web/WebServicesGrid';
import MaximizeRoi from '../components/common/MaximizeRoi';
import WebPricing from '../components/web/WebPricing';
import TrustCompliance from '../components/common/TrustCompliance';
import FAQSection from '../components/common/FAQSection';
import LeadCaptureForm from '../components/common/LeadCaptureForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { webPageContent } from '../data/websiteContent';

export const WebDesigningLeads = () => {
  useEffect(() => {
    document.title = webPageContent.meta.title;
  }, []);

  useScrollAnimation();

  return (
    <div className="web-designing-leads-page">
      {/* Page Hero */}
      <PageHero
        title={webPageContent.hero.h1}
        subtitle={webPageContent.hero.eyebrow}
        bgImage="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1400"
        breadcrumbs={[{ label: 'Web Designing Leads', path: '/website-designing-leads' }]}
      />

      {/* Paragraph intro under Hero */}
      <section className="section-light" style={{ padding: '60px 0 20px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.7', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '20px' }}>
            {webPageContent.hero.body1}
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
            {webPageContent.hero.body2}
          </p>
        </div>
      </section>

      {/* Services Grid (3 Lead Tiers) */}
      <WebServicesGrid />

      {/* ROI Optimization Checklist */}
      <MaximizeRoi type="Web Design" />

      {/* Web Design Package Pricing */}
      <WebPricing />

      {/* Trust and Compliance rules */}
      <TrustCompliance />

      {/* FAQ section */}
      <FAQSection />

      {/* Shared Lead Capture Form (#formup) */}
      <LeadCaptureForm 
        title="Request Free Web Design Lead Samples"
        subtitle="Complete target parameters profiling. Vetting checks apply."
      />
    </div>
  );
};

export default WebDesigningLeads;
