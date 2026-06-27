import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaUsers, FaBullhorn, FaPenAlt, FaShareAlt } from 'react-icons/fa';
import { seoServices } from '../../data/services';
import './ServicesGrid.css';

const ICON_MAP = {
  'seo-services': <FaSearch />,
  'local-seo': <FaMapMarkerAlt />,
  'lead-generation': <FaUsers />,
  'ppc-advertising': <FaBullhorn />,
  'content-marketing': <FaPenAlt />,
  'social-media': <FaShareAlt />
};

export const ServicesGrid = () => {
  return (
    <section className="services-section">
      <div className="services-section__inner">
        <div className="services-section__grid">
          {seoServices.map((service) => (
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

export default ServicesGrid;
