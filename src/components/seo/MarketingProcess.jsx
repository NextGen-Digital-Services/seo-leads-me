import React from 'react';
import { FaSearch, FaPenAlt, FaCog, FaChartLine } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import './MarketingProcess.css';

const STEPS = [
  {
    number: '01',
    title: 'Research',
    description: 'We analyze your business, competitors and market opportunities.',
    icon: <FaSearch />
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We create a customised marketing strategy for maximum results.',
    icon: <FaPenAlt />
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Our team executes the strategy with precision and expertise.',
    icon: <FaCog />
  },
  {
    number: '04',
    title: 'Results',
    description: 'We track performance and optimize for continuous growth.',
    icon: <FaChartLine />
  }
];

export const MarketingProcess = () => {
  return (
    <section className="process">
      <div className="process__inner">
        {/* Title */}
        <SectionTitle
          title="Our Proven Marketing Process"
          subtitle="How We Work"
          theme="dark"
        />

        {/* Process Items Row */}
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

              {/* Add separator arrow if not the last item */}
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

export default MarketingProcess;
