import React from 'react';
import './OurValues.css';

const VALUES_LIST = [
  { icon: '🤝', title: 'Integrity', desc: 'We act with honesty and adhere to high ethical standards in all relationships.' },
  { icon: '💡', title: 'Innovation', desc: 'We seek new creative strategies to drive visibility and growth.' },
  { icon: '🔍', title: 'Transparency', desc: 'We maintain clear communications and honest progress tracking.' },
  { icon: '🎯', title: 'Results', desc: 'We focus on actionable outcomes that maximize ROI for our partners.' }
];

export const OurValues = () => {
  return (
    <div className="who-right-card">
      <h3 className="values-card-title">Our Core Values</h3>
      <div className="values-list">
        {VALUES_LIST.map((val) => (
          <div key={val.title} className="value-item">
            <div className="value-icon-circle">
              <span className="value-icon-symbol">{val.icon}</span>
            </div>
            <div className="value-text-block">
              <h4 className="value-title">{val.title}</h4>
              <p className="value-desc">{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValues;
