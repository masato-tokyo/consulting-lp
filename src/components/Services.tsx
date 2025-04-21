import React from 'react';
import Section from './Section';
import { services } from '../constants';

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6 leading-tight">
          あなたの"経営の創造プロセス"に、<br />
          外部の視点と推進力を加えます。
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          
          return (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 bg-indigo-100 text-indigo-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-800 group-hover:text-white transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-base md:text-lg text-gray-600">{service.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;