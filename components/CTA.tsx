import React from 'react';
import Section from './Section';
import Button from './Button';

const CTA: React.FC = () => {
  return (
    <Section className="bg-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
          雑談から、はじめてみませんか？
        </h2>
        
        <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
          売上や組織のことだけでなく、<br />
          これからのこと、自分自身のことまで。<br />
          話すうちに、経営と人生の輪郭がつながっていく。
        </p>
        
        <p className="text-xl text-gray-700 mb-10 italic">
          "経営の雑談"から、気軽に声をかけてみてください。
        </p>
        
        <Button 
          href="https://tally.so/your-form-link" 
          variant="secondary"
          className="text-lg px-10 py-4"
        >
          話してみる（ご相談フォームへ）
        </Button>
      </div>
    </Section>
  );
};

export default CTA;