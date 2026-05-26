import React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning';
}

export const Chip: React.FC<ChipProps> = ({ children, variant = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-surface-dim text-on-surface',
    success: 'bg-tertiary-container text-on-tertiary-container', // Sage Green
    warning: 'bg-secondary-container text-on-secondary-container', // Sandy Yellow (closest to spec)
  };

  return (
    <span 
      className={`inline-block px-3 py-1 rounded-md text-xs font-sans font-semibold tracking-wide uppercase ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
