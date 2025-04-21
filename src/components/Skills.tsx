import React from 'react';
import Section from './Section';
import { coreValues, baseSkills } from '../constants';
import { Award, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section className="bg-indigo-900 text-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
          考えるだけでなく、形にして、一緒に進める。
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-indigo-800 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <Award size={28} className="text-orange-400 mr-3" />
            <h3 className="text-2xl font-semibold">コアバリュー：</h3>
          </div>
          
          <ul className="space-y-4">
            {coreValues.map((value, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-100 text-lg">{value}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-indigo-800 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <Lightbulb size={28} className="text-orange-400 mr-3" />
            <h3 className="text-2xl font-semibold">ベーススキル：</h3>
          </div>
          
          <ul className="space-y-4">
            {baseSkills.map((skill, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3"></span>
                <span className="text-gray-100 text-lg">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Skills;