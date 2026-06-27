import React from 'react';
import { FaTrophy, FaSmile, FaCalendarAlt, FaStar } from 'react-icons/fa';
import './StatsBar.css';

const DEFAULT_STATS = [
  { value: '250+', label: 'Projects Completed', icon: <FaTrophy /> },
  { value: '180+', label: 'Happy Clients', icon: <FaSmile /> },
  { value: '12+', label: 'Years of Experience', icon: <FaCalendarAlt /> },
  { value: '95%', label: 'Client Satisfaction', icon: <FaStar /> }
];

export const StatsBar = ({ stats = DEFAULT_STATS }) => {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stats__item fade-up-element">
            {stat.icon}
            <span className="stats__number">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
