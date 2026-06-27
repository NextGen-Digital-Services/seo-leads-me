import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

/**
 * Common Page Hero banner with breadcrumbs.
 * @param {Object} props
 * @param {string} props.title - Inner page title.
 * @param {Array} props.breadcrumbs - Array of { label, path } for breadcrumb items.
 * @param {string} props.bgImage - Background image URL.
 */
export const PageHero = ({
  title,
  breadcrumbs = [],
  bgImage
}) => {
  const heroStyle = bgImage
    ? { backgroundImage: `url(${bgImage})` }
    : {};

  return (
    <section className="page-hero" style={heroStyle}>
      <div className="page-hero__content fade-up-element">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.label}>
              {idx === breadcrumbs.length - 1 ? (
                <span className="active">{crumb.label}</span>
              ) : (
                <>
                  <Link to={crumb.path}>{crumb.label}</Link>
                  <span>/</span>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
