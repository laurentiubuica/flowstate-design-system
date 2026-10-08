import React from 'react';
import '../styles/tokens.css';

/**
 * Flowstate Card
 * A simple surface container used across dashboard and settings screens.
 */
export function Card({ title, children }) {
  const cardStyle = {
    backgroundColor: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--space-6)',
    boxShadow: 'var(--shadow-sm)',
  };

  const titleStyle = {
    fontFamily: 'var(--font-family-base)',
    fontSize: 'var(--font-size-lg)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--color-text)',
    marginBottom: 'var(--space-3)',
  };

  return (
    <div style={cardStyle}>
      {title && <div style={titleStyle}>{title}</div>}
      {children}
    </div>
  );
}
