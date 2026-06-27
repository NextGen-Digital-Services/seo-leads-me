import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

export const Testimonials = () => {
  return (
    <section className="testimonials-section section-light">
      <div className="container">
        {/* Section Heading */}
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Client Feedback"
          align="center"
        />

        {/* Testimonials Grid */}
        <div className="testimonials-grid grid-3">
          {testimonials.map((test) => (
            <div key={test.id} className="testimonial-card fade-up-element">
              {/* Large quote symbol */}
              <div className="testimonial-quote-icon">❝</div>
              <p className="testimonial-quote-text">{test.quote}</p>
              
              <div className="testimonial-author-meta">
                <h4 className="testimonial-author-name">{test.author}</h4>
                <p className="testimonial-author-role">
                  {test.role}, <span className="author-company">{test.company}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
