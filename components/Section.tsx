import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section 
      id={id}
      className={`py-16 md:py-24 px-4 ${className}`}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;