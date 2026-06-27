import React from 'react';
import { FaComments, FaPaintBrush, FaCode, FaRocket } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import './DesignProcess.css';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We explore your business objectives, target audience and competitive landscape.',
    icon: <FaComments />
  },
  {
    number: '02',
    title: 'Design',
    description: 'We create mockups and layouts ensuring a premium UX/UI and modern aesthetic.',
    icon: <FaPaintBrush />
  },
  {
    number: '03',
    title: 'Development',
    description: 'Our engineers build clean, fast, and mobile-responsive websites utilizing clean code.',
    icon: <FaCode />
  },
  {
    number: '04',
    title: 'Launch',
    description: 'We deploy the high-performing platform, checking SEO compliance and page speeds.',
    icon: <FaRocket />
  }
];

export const DesignProcess = () => {
  return (
    <section className="process">
      <div className="process__inner">
        {/* Section Title */}
        <SectionTitle
          title="Our Design Process"
          subtitle="How We Build"
          theme="dark"
        />

        {/* Process Steps */}
        <div className="process__steps">
          {STEPS.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div className="process__step fade-up-element">
                <div className="process__step-icon">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              {/* Connector Arrow */}
              {idx < STEPS.length - 1 && (
                <div className="process__arrow">→</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
