import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__inner">
        {/* Section Heading */}
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Client Feedback"
          align="center"
          theme="light"
        />

        {/* Testimonials Grid */}
        <div className="testimonials__grid">
          {testimonials.map((test) => (
            <div key={test.id} className="testimonial__card fade-up-element">
              <FaQuoteLeft />
              <p className="testimonial__text">{test.quote}</p>
              <div className="testimonial__name">{test.author}</div>
              <div className="testimonial__role">
                {test.role}, {test.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
