import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 border text-base font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gold transition-all duration-200 font-sans tracking-wide uppercase text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-gold hover:bg-brand-goldHover",
    secondary: "border-transparent text-white bg-brand-evergreen hover:bg-opacity-90",
    outline: "border-brand-evergreen text-brand-evergreen bg-transparent hover:bg-brand-evergreen hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;