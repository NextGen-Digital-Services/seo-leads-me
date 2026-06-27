import React, { useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import WhoWeAre from '../components/about/WhoWeAre';
import SectionTitle from '../components/common/SectionTitle';
import StatsBar from '../components/common/StatsBar';
import LeadershipTeam from '../components/about/LeadershipTeam';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const AboutUs = () => {
  useEffect(() => {
    document.title = 'SEO Leads Me | About Us';
  }, []);

  useScrollAnimation();

  return (
    <div className="about-us-page">
      {/* Page Hero with custom background */}
      <PageHero
        title="About SEO Leads Me"
        bgImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400"
        breadcrumbs={[{ label: 'About Us', path: '/about-us' }]}
      />

      {/* Who We Are & Core Values (white bg) */}
      <WhoWeAre />

      {/* Achievements Section (white bg) */}
      <section className="section-light achievements-section" style={{ borderTop: '1px solid var(--color-border)', paddingBottom: '100px' }}>
        <div className="container">
          <SectionTitle
            title="Our Achievements"
            subtitle="Milestones & Numbers"
            align="center"
          />
          <StatsBar theme="light" />
        </div>
      </section>

      {/* Leadership Team Grid (white bg) */}
      <LeadershipTeam />
    </div>
  );
};

export default AboutUs;
