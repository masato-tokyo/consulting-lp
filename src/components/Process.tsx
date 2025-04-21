import React from 'react';
import Section from './Section';
import { process } from '../constants';
import Button from './Button';

const Process: React.FC = () => {
  return (
    <Section id="process" className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
          まずは"話してみる"ところから、<br />はじめませんか？
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-indigo-200 -translate-x-1/2 z-0"></div>
        
        {process.map((item, index) => (
          <div 
            key={index}
            className={`flex flex-col md:flex-row gap-8 mb-16 last:mb-0 relative ${
              index % 2 === 0 ? '' : 'md:flex-row-reverse'
            }`}
          >
            {/* Step number */}
            <div className="md:w-1/2 flex md:justify-center">
              <div className="w-12 h-12 bg-indigo-800 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                {item.step}
              </div>
            </div>
            
            {/* Content */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button 
          href="https://tally.so/your-form-link" 
          variant="secondary"
          className="text-lg px-8 py-4"
        >
          話してみる（ご相談フォームへ）
        </Button>
      </div>
    </Section>
  );
};

export default Process;