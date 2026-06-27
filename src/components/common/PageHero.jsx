import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

/**
 * Common Page Hero banner with breadcrumbs.
 * @param {Object} props
 * @param {string} props.title - Inner page title.
 * @param {Array} props.breadcrumbs - Array of { label, path } for breadcrumb items.
 * @param {string} props.bgImage - Background Unsplash image URL.
 */
export const PageHero = ({
  title,
  breadcrumbs = [],
  bgImage
}) => {
  const heroStyle = bgImage
    ? { backgroundImage: `linear-gradient(rgba(13, 27, 42, 0.85), rgba(13, 27, 42, 0.95)), url(${bgImage})` }
    : {};

  return (
    <section className="page-hero" style={heroStyle}>
      <div className="container page-hero-container fade-up-element">
        <h1 className="page-hero-title">{title}</h1>
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="breadcrumb">
            <ul className="breadcrumb-list">
              <li>
                <Link to="/" className="breadcrumb-link">Home</Link>
              </li>
              {breadcrumbs.map((crumb, idx) => (
                <li key={crumb.label} className="breadcrumb-item">
                  <span className="breadcrumb-separator">/</span>
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="breadcrumb-current" aria-current="page">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link to={crumb.path} className="breadcrumb-link">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};

export default PageHero;
