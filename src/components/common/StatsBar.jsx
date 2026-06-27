import React from 'react';
import './StatsBar.css';

const DEFAULT_STATS = [
  { value: '250+', label: 'Projects Completed' },
  { value: '180+', label: 'Happy Clients' },
  { value: '12+', label: 'Years of Experience' },
  { value: '95%', label: 'Client Satisfaction' }
];

/**
 * Reusable Stats Bar component with vertical dividers.
 * @param {Object} props
 * @param {Array} [props.stats=DEFAULT_STATS] - Array of { value, label } stats.
 * @param {string} [props.theme='dark'] - Theme style: 'dark' (navy bar) or 'light' (achievements styled).
 */
export const StatsBar = ({
  stats = DEFAULT_STATS,
  theme = 'dark'
}) => {
  return (
    <div className={`stats-bar stats-theme-${theme} fade-up-element`}>
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
            {index < stats.length - 1 && <div className="stat-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
