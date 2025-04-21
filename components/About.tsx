import React from 'react';
import Section from './Section';
import { experience } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-indigo-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            創造を動かす、<br />もう一人の右腕として
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              竹内正人｜経営・戦略コンサルタント / UXデザイナー / プロデューサー
            </h3>
            <p className="text-gray-700 leading-relaxed">
              老舗デザイン会社、大手人材企業を経て独立。<br />
              構想の言語化から実行の設計・支援まで、事業・組織・地域の変化を共に創ってきました。
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">問い続けることが、私のスタイルです。</h3>
            <ul className="space-y-2">
              {experience.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50 z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200 rounded-full opacity-50 z-0"></div>
          
          <div className="relative z-10 bg-white p-1 shadow-lg rounded-lg">
            <img 
              src="https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="竹内正人" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;