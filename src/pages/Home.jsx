import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesRow from '../components/home/FeaturesRow';
import WhyChooseUs from '../components/home/WhyChooseUs';
import StatsBar from '../components/common/StatsBar';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/common/CTABanner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Home = () => {
  // Set document title on page render
  useEffect(() => {
    document.title = 'SEO Leads Me | Generate. Rank. Convert.';
  }, []);

  // Hook to scan viewport on mount and trigger CSS animations on scroll
  useScrollAnimation();

  return (
    <div className="home-page">
      {/* Dark Navy Hero Section */}
      <HeroSection />

      {/* White background features list */}
      <FeaturesRow />

      {/* White background Why Choose Us grid */}
      <WhyChooseUs />

      {/* Dark Navy Stats strip */}
      <StatsBar />

      {/* Light background customer reviews */}
      <Testimonials />

      {/* Dark Navy CTA Banner */}
      <CTABanner
        title="Ready to Get More Leads and Grow Your Business?"
        subtitle="Let's create a strategy that works for you."
        buttonText="Get Free Consultation"
        buttonLink="/contact-us"
        variant="dark"
      />
    </div>
  );
};

export default Home;
