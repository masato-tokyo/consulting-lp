import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900 leading-tight mb-6">
            経営の選択に、<br />
            もう一人の右腕を。
          </h1>
          
          <p className="text-base md:text-lg text-gray-700 mb-10 leading-relaxed">
            事業の構想や組織の"もやもや"を、<br className="hidden md:block" />
            週1〜2回の壁打ちから一緒に進めませんか？
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              href="https://tally.so/your-form-link" 
              variant="secondary"
              className="text-base md:text-lg px-8 py-4"
            >
              話してみる（ご相談フォームへ）
            </Button>
            <Button 
              href="#services" 
              variant="outline"
              className="text-base md:text-lg px-8 py-4"
            >
              サービスを見る
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;