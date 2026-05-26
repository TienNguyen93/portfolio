import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`rounded-xl bg-theme-white/60 backdrop-blur-md border border-theme-cloudy/20 shadow-lg hover:-translate-y-1 hover:bg-theme-white/10 hover:border-theme-cloudy/30 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
