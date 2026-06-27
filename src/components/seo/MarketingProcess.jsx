import React from 'react';
import SectionTitle from '../common/SectionTitle';
import './MarketingProcess.css';

const STEPS = [
  {
    number: '01',
    title: 'Research',
    description: 'We analyze your business, competitors and market opportunities.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We create a customised marketing strategy for maximum results.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our team executes the strategy with precision and expertise.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    )
  },
  {
    number: '04',
    title: 'Results',
    description: 'We track performance and optimize for continuous growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  }
];

export const MarketingProcess = () => {
  return (
    <section className="process-section section-dark">
      <div className="container">
        {/* Title */}
        <SectionTitle
          title="Our Proven Marketing Process"
          subtitle="How We Work"
          align="center"
        />

        {/* Process Items Row */}
        <div className="process-row">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="process-step fade-up-element">
                <div className="process-icon-circle">
                  {step.icon}
                  <span className="step-badge">{step.number}</span>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>

              {/* Add separator arrow if not the last item */}
              {idx < STEPS.length - 1 && (
                <div className="process-arrow-divider">
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

export default MarketingProcess;
