import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  href, 
  onClick 
}) => {
  const baseStyles = "inline-block px-6 py-3 font-medium rounded-md transition-all duration-300 text-center";
  
  const variantStyles = {
    primary: "bg-indigo-900 text-white hover:bg-indigo-800 shadow-md hover:shadow-lg",
    secondary: "bg-orange-500 text-white hover:bg-orange-400 shadow-md hover:shadow-lg",
    outline: "border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-50"
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;