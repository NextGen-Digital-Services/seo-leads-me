import React, { useState } from 'react';
import Button from '../common/Button';
import './NewsletterBlock.css';

export const NewsletterBlock = () => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState(''); // '', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (honeypot) {
      // Spam submission detected
      setStatus('success'); // Silently ignore spam
      return;
    }
    if (!email) {
      setStatus('error');
      return;
    }
    console.log('Newsletter signup email:', email);
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="newsletter-block section-light" style={{ padding: '60px 0', borderTop: '1px solid var(--color-border)', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '10px' }}>
          Sign up for Newsletter
        </h3>
        <p style={{ fontSize: '1rem', color: '#E63A00', fontWeight: 600, marginBottom: '25px' }}>
          and receive 40% discount on first project
        </p>

        {status === 'success' && (
          <div style={{ background: '#28a745', color: '#ffffff', padding: '15px', borderRadius: '6px', marginBottom: '20px', fontWeight: 'bold' }}>
            Thanks for subscribing! Check your inbox for the discount code.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Honeypot field (hidden for users, filled by bots) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="honeypot">Leave this field empty if you're human</label>
            <input 
              type="text" 
              id="honeypot" 
              name="honeypot" 
              value={honeypot} 
              onChange={(e) => setHoneypot(e.target.value)} 
            />
          </div>

          <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flexGrow: 1,
                padding: '13px 16px',
                borderRadius: '6px',
                border: '1px solid var(--color-border)',
                outline: 'none',
                fontSize: '15px'
              }}
              required
            />
            <Button type="submit" variant="filled">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBlock;
