import React from 'react';
import { Link } from 'react-router-dom';
import { seoServices } from '../../data/services';
import './ServicesGrid.css';

export const ServicesGrid = () => {
  return (
    <div className="services-grid-wrapper">
      <div className="services-grid grid-3">
        {seoServices.map((service) => (
          <div key={service.id} className="service-card fade-up-element">
            <div className="service-card-icon">
              {service.icon}
            </div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>
            <Link to="/contact-us" className="service-card-link">
              Learn More <span className="arrow-span">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
