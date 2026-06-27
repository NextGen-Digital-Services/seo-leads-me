import React from 'react';
import SectionTitle from '../common/SectionTitle';
import './DesignProcess.css';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We explore your business objectives, target audience and competitive landscape.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create mockups and layouts ensuring a premium UX/UI and modern aesthetic.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
        <path d="M12 6V12L16 14"></path>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our engineers build clean, fast, and mobile-responsive websites utilizing clean code.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy the high-performing platform, checking SEO compliance and page speeds.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M22 2L11 13"></path>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
      </svg>
    )
  }
];

export const DesignProcess = () => {
  return (
    <section className="design-process-section section-dark">
      <div className="container">
        {/* Section Title */}
        <SectionTitle
          title="Our Design Process"
          subtitle="How We Build"
          align="center"
        />

        {/* Process Steps */}
        <div className="design-process-row">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="design-process-step fade-up-element">
                <div className="design-process-icon-circle">
                  {step.icon}
                  <span className="design-step-badge">{step.number}</span>
                </div>
                <h3 className="design-process-step-title">{step.title}</h3>
                <p className="design-process-step-desc">{step.description}</p>
              </div>

              {/* Connector Arrow */}
              {idx < STEPS.length - 1 && (
                <div className="design-process-arrow-divider">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
