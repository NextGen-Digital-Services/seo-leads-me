import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesRow from '../components/home/FeaturesRow';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsBar from '../components/common/StatsBar';
import Methodology from '../components/common/Methodology';
import SaveTime from '../components/home/SaveTime';
import HomePricing from '../components/home/HomePricing';
import BookCallSection from '../components/common/BookCallSection';
import LeadCaptureForm from '../components/common/LeadCaptureForm';
import BoldTestimonials from '../components/common/BoldTestimonials';
import FAQSection from '../components/common/FAQSection';
import TrustCompliance from '../components/common/TrustCompliance';
import CTABanner from '../components/common/CTABanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { homeContent } from '../data/websiteContent';

export const Home = () => {
  useEffect(() => {
    document.title = homeContent.meta.title;
  }, []);

  useScrollAnimation();

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Stats bar with quote */}
      <StatsBar />

      {/* 3. Services We Offer */}
      <FeaturesRow />

      {/* 4. Methodology Section */}
      <Methodology />

      {/* 5. Who We Are & Value Points */}
      <WhyChooseUs />

      {/* 6. Save Time & Effort Section */}
      <SaveTime />

      {/* 7. Pricing Tiers */}
      <HomePricing />

      {/* 8. Trust & Compliance standards */}
      <TrustCompliance />

      {/* 9. FAQ Accordion section */}
      <FAQSection />

      {/* 10. Book a Strategy Call Section */}
      <BookCallSection />

      {/* 11. Large format rotating quote testimonials slider */}
      <BoldTestimonials />

      {/* 12. Lead Capture Form (#formup) */}
      <LeadCaptureForm 
        title="Request Free Samples"
        subtitle="Complete the questionnaire below. We will provide pre-qualified lead samples matching your target parameters."
      />

      {/* 13. Call-To-Action Banner */}
      <CTABanner
        title={homeContent.ctaSection.h2}
        subtitle={homeContent.ctaSection.body}
        buttonText="Get Free Samples Now"
        buttonLink="#formup"
        variant="dark"
      />
    </div>
  );
};

export default Home;
