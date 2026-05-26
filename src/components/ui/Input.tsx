import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="font-sans font-semibold text-sm text-on-surface">{label}</label>}
      <input 
        className={`bg-transparent border border-primary/20 rounded px-4 py-2 font-sans text-on-surface placeholder:text-outline focus:outline-none focus:border-tertiary focus:border-2 transition-all duration-200 ${className}`}
        {...props}
      />
    </div>
  );
};
