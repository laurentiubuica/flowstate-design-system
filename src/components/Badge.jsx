import React from 'react';
import '../styles/tokens.css';

/**
 * Flowstate Badge
 * status: 'success' | 'warning' | 'danger' | 'neutral'
 */
export function Badge({ status = 'neutral', children }) {
  const colors = {
    success: { bg: '#D1FAE5', fg: 'var(--color-success)' },
    warning: { bg: '#FEF3C7', fg: 'var(--color-warning)' },
    danger:  { bg: '#FEE2E2', fg: 'var(--color-danger)' },
    neutral: { bg: '#F3F4F6', fg: 'var(--color-text-muted)' },
  };
  const c = colors[status];

  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-family-base)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-medium)',
        color: c.fg,
        backgroundColor: c.bg,
        borderRadius: 'var(--radius-sm)',
        padding: '2px 8px',
      }}
    >
      {children}
    </span>
  );
}
