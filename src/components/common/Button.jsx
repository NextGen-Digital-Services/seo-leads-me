import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Common Button component supporting standard button clicks and Link transitions.
 * @param {Object} props
 * @param {string} [props.to] - Path to redirect to. If provided, renders Link.
 * @param {string} [props.variant='filled'] - 'filled' or 'outline' style.
 * @param {string} [props.type='button'] - Button HTML type.
 * @param {boolean} [props.disabled=false] - Disabled state.
 * @param {boolean} [props.fullWidth=false] - Makes button block level.
 * @param {string} [props.className=''] - Extra classes.
 * @param {function} [props.onClick] - Optional click handler.
 * @param {React.ReactNode} props.children - Text or child elements.
 */
export const Button = ({
  to,
  variant = 'filled',
  type = 'button',
  disabled = false,
  fullWidth = false,
  className = '',
  onClick,
  children
}) => {
  const btnClass = `btn btn-${variant} ${fullWidth ? 'btn-block' : ''} ${className}`;

  if (to) {
    return (
      <Link to={to} className={btnClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={btnClass}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
