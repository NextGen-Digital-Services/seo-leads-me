import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonialsContent } from '../../data/websiteContent';
import './BoldTestimonials.css';

export const BoldTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsContent.length) % testimonialsContent.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsContent.length);
  };

  return (
    <section id="testimonials-bold" className="bold-testimonials-section" style={{ background: '#09111e', padding: '100px 0', position: 'relative', color: '#ffffff', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
        <div className="quote-icon-container" style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', color: '#E63A00', fontSize: '3.5rem', opacity: 0.5 }}>
          <FaQuoteLeft />
        </div>

        <div className="testimonials-slider" style={{ minHeight: '280px', display: 'flex', flexDirection: 'column', justifySelf: 'center', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          {testimonialsContent.map((item, idx) => (
            <div 
              key={idx} 
              className={`testimonial-slide ${idx === activeIndex ? 'active' : 'inactive'}`}
              style={{
                display: idx === activeIndex ? 'block' : 'none',
                opacity: idx === activeIndex ? 1 : 0,
                transition: 'opacity 0.8s ease'
              }}
            >
              <blockquote style={{ fontSize: '1.75rem', fontWeight: 600, lineHeight: '1.6', color: '#f8fafc', margin: '0 0 35px 0', fontStyle: 'italic' }}>
                {item.quote}
              </blockquote>
              <div className="author-details">
                <span className="author-name" style={{ display: 'block', color: '#E63A00', fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  {item.clientName}
                </span>
                <span className="author-title" style={{ display: 'block', color: '#94a3b8', fontSize: '0.95rem', marginTop: '5px' }}>
                  {item.role} &bull; {item.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="slider-nav" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
          <button 
            onClick={handlePrev} 
            aria-label="Previous Testimonial"
            style={{ background: 'transparent', border: '1px solid #1e293b', color: '#ffffff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#E63A00'; e.currentTarget.style.color = '#E63A00'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.color = '#ffffff'; }}
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={handleNext} 
            aria-label="Next Testimonial"
            style={{ background: 'transparent', border: '1px solid #1e293b', color: '#ffffff', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#E63A00'; e.currentTarget.style.color = '#E63A00'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#1e293b'; e.currentTarget.style.color = '#ffffff'; }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoldTestimonials;
