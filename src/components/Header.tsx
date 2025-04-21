import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-indigo-900 tracking-tight">
          竹内コンサルティング
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-700 hover:text-indigo-900 transition-colors">サービス</a>
          <a href="#about" className="text-gray-700 hover:text-indigo-900 transition-colors">プロフィール</a>
          <a href="#cases" className="text-gray-700 hover:text-indigo-900 transition-colors">実績</a>
          <a href="#process" className="text-gray-700 hover:text-indigo-900 transition-colors">ご相談の流れ</a>
          <Button href="https://tally.so/your-form-link" variant="primary">
            相談してみる
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-indigo-900 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              サービス
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-indigo-900 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              プロフィール
            </a>
            <a 
              href="#cases" 
              className="text-gray-700 hover:text-indigo-900 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              実績
            </a>
            <a 
              href="#process" 
              className="text-gray-700 hover:text-indigo-900 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ご相談の流れ
            </a>
            <Button 
              href="https://tally.so/your-form-link" 
              variant="primary" 
              className="w-full"
            >
              相談してみる
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;