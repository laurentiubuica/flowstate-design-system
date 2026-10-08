import React from 'react';
import '../styles/tokens.css';

/**
 * Flowstate Button
 * variant: 'primary' | 'secondary' | 'ghost'
 */
export function Button({ variant = 'primary', children, onClick }) {
  const base = {
    fontFamily: 'var(--font-family-base)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 'var(--font-weight-medium)',
    padding: '10px 20px',
    borderRadius: 'var(--radius-md)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 120ms ease',
  };

  const variants = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-primary)',
      border: '1px solid var(--color-border)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-muted)',
    },
  };

  return (
    <button style={{ ...base, ...variants[variant] }} onClick={onClick}>
      {children}
    </button>
  );
}
