import React from 'react';
import { FaHandshake, FaLightbulb, FaEye, FaTrophy } from 'react-icons/fa';
import './OurValues.css';

const VALUES_LIST = [
  { icon: <FaHandshake />, title: 'Integrity', desc: 'We act with honesty and adhere to high ethical standards in all relationships.' },
  { icon: <FaLightbulb />, title: 'Innovation', desc: 'We seek new creative strategies to drive visibility and growth.' },
  { icon: <FaEye />, title: 'Transparency', desc: 'We maintain clear communications and honest progress tracking.' },
  { icon: <FaTrophy />, title: 'Results', desc: 'We focus on actionable outcomes that maximize ROI for our partners.' }
];

export const OurValues = () => {
  return (
    <div className="values-card">
      <h3>Our Core Values</h3>
      <div className="values-list">
        {VALUES_LIST.map((val) => (
          <div key={val.title} className="values-item">
            {val.icon}
            <span><strong>{val.title}:</strong> {val.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
