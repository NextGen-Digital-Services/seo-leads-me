import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaintBrush, FaFileAlt, FaShoppingCart, FaLayerGroup, FaSyncAlt, FaMobileAlt } from 'react-icons/fa';
import { webServices } from '../../data/services';
import './WebServicesGrid.css';

const ICON_MAP = {
  'website-design': <FaPaintBrush />,
  'landing-page': <FaFileAlt />,
  'ecommerce': <FaShoppingCart />,
  'ui-ux': <FaLayerGroup />,
  'redesign': <FaSyncAlt />,
  'responsive': <FaMobileAlt />
};

export const WebServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="services-section__inner">
        <div className="services-section__grid">
          {webServices.map((service) => (
            <div key={service.id} className="service-card fade-up-element">
              <div className="service-card__icon">
                {ICON_MAP[service.id]}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/contact-us">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebServicesGrid;
