import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqData } from '../../data/websiteContent';
import SectionTitle from './SectionTitle';
import './FAQSection.css';

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-light" style={{ padding: '80px 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Operational Details & Client Queries"
          align="center"
        />

        <div className="faq-list" style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqData.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="faq-item fade-up-element" 
                style={{ 
                  background: '#ffffff', 
                  border: '1px solid var(--color-border)', 
                  borderRadius: '6px', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="faq-question-button"
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                    {faq.question}
                  </span>
                  <span style={{ color: '#E63A00', marginLeft: '15px' }}>
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {isOpen && (
                  <div 
                    className="faq-answer-container" 
                    style={{ 
                      padding: '0 24px 20px 24px', 
                      fontSize: '0.95rem', 
                      lineHeight: '1.6', 
                      color: 'var(--color-text-muted)',
                      borderTop: '1px solid var(--color-light-bg)'
                    }}
                  >
                    <p style={{ margin: 0 }}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
