import React from 'react';

type TypographyVariant = 'display-lg' | 'display-lg-mobile' | 'headline-lg' | 'headline-md' | 'body-lg' | 'body-md' | 'label-md' | 'label-sm';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body-md', 
  as,
  children, 
  className = '', 
  ...props 
}) => {
  const styles: Record<TypographyVariant, string> = {
    'display-lg': 'font-sans text-[48px] font-bold leading-[56px] tracking-[-0.02em]',
    'display-lg-mobile': 'font-sans text-[36px] font-bold leading-[42px] tracking-[-0.02em]',
    'headline-lg': 'font-sans text-[32px] font-semibold leading-[40px]',
    'headline-md': 'font-sans text-[24px] font-semibold leading-[32px]',
    'body-lg': 'font-serif text-[18px] font-normal leading-[28px]',
    'body-md': 'font-serif text-[16px] font-normal leading-[24px]',
    'label-md': 'font-sans text-[14px] font-semibold leading-[20px] tracking-[0.05em] uppercase',
    'label-sm': 'font-sans text-[12px] font-medium leading-[16px]',
  };

  const defaultElement: Record<TypographyVariant, React.ElementType> = {
    'display-lg': 'h1',
    'display-lg-mobile': 'h1',
    'headline-lg': 'h2',
    'headline-md': 'h3',
    'body-lg': 'p',
    'body-md': 'p',
    'label-md': 'span',
    'label-sm': 'span',
  };

  const Component = as || defaultElement[variant];

  return (
    <Component className={`${styles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  );
};
