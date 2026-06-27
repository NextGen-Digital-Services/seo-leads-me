import React from 'react';
import { FaUsers, FaSearch, FaBullhorn, FaChartBar } from 'react-icons/fa';
import './FeaturesRow.css';

const FEATURES = [
  {
    title: 'Lead Generation',
    description: 'Acquire high-intent customers and boost sales with qualified campaigns.',
    icon: <FaUsers />
  },
  {
    title: 'SEO Optimisation',
    description: 'Grow organic visibility and drive persistent traffic on your terms.',
    icon: <FaSearch />
  },
  {
    title: 'PPC Advertising',
    description: 'Launch targeted paid campaigns designed for positive ROI and speed.',
    icon: <FaBullhorn />
  },
  {
    title: 'Analytics & Reports',
    description: 'Track growth metrics, user journeys, and conversions transparently.',
    icon: <FaChartBar />
  }
];

export const FeaturesRow = () => {
  return (
    <section className="features">
      <div className="features__grid">
        {FEATURES.map((feat) => (
          <div key={feat.title} className="features__card fade-up-element">
            <div className="icon-circle">
              {feat.icon}
            </div>
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRow;
