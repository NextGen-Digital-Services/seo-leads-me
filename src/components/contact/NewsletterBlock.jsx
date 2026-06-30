import React, { useState } from 'react';
import Button from '../common/Button';
import './NewsletterBlock.css';

export const NewsletterBlock = () => {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState(''); // '', 'success', 'error'

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) {
      setStatus('success');
      return;
    }
    if (!email) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('');
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error('Web3Forms access key is not configured.');
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New Newsletter Subscription Request',
          from_name: 'SEO Leads Web App',
          email: email
        })
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || 'API submission failed.');
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

        {status === 'error' && (
          <div style={{ background: '#dc3545', color: '#ffffff', padding: '15px', borderRadius: '6px', marginBottom: '20px', fontWeight: 'bold' }}>
            Something went wrong. Please try again.
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
              disabled={isSubmitting}
            />
            <Button type="submit" variant="filled" disabled={isSubmitting}>
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBlock;
