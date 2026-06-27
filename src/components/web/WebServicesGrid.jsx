import React from 'react';
import { Link } from 'react-router-dom';
import { webServices } from '../../data/services';
import './WebServicesGrid.css';

export const WebServicesGrid = () => {
  return (
    <div className="web-services-grid-wrapper">
      <div className="web-services-grid grid-3">
        {webServices.map((service) => (
          <div key={service.id} className="web-service-card fade-up-element">
            <div className="web-service-card-icon">
              {service.icon}
            </div>
            <h3 className="web-service-card-title">{service.title}</h3>
            <p className="web-service-card-desc">{service.description}</p>
            <Link to="/contact-us" className="web-service-card-link">
              Learn More <span className="web-arrow-span">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebServicesGrid;
