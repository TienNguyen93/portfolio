import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium rounded-md transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl';
  
  const variants = {
    primary: 'bg-theme-crail text-white border border-theme-crail shadow-md hover:bg-theme-crail/90',
    secondary: 'bg-[#8C877A] text-white border border-[#8C877A] shadow-md hover:opacity-90',
    outline: 'bg-transparent text-theme-crail border-2 border-theme-crail hover:bg-theme-crail hover:text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
