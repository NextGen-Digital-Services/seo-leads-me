import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FaChartBar } from 'react-icons/fa';
import Button from './Button';
import { NAV_LINKS } from '../../utils/constants';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-logo-container">
          <div className="navbar-logo">
            <FaChartBar style={{ color: '#E63A00', fontSize: '1.8rem' }} />
            <div className="logo-text-group">
              <span className="logo-name">SEO Leads Me</span>
              <span className="logo-tagline">Generate. Rank. Convert.</span>
            </div>
          </div>
        </Link>

        {/* Center Desktop Links */}
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right CTA Button */}
        <div className="navbar-cta">
          <Button to="/contact-us" variant="filled">
            Get a Free Quote
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`hamburger ${isMenuOpen ? 'hamburger-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mobile-menu-cta-wrapper">
            <Button to="/contact-us" variant="filled" fullWidth>
              Get a Free Quote
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
