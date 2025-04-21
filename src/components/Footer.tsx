import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">竹内コンサルティング</h3>
            <p className="text-indigo-200 max-w-md">
              経営者の「もやもや」を言葉にして、伴走的に動かす経営コンサルティングサービス
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-100">サービス</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-indigo-200 hover:text-white transition-colors">サービス内容</a></li>
                <li><a href="#cases" className="text-indigo-200 hover:text-white transition-colors">事例紹介</a></li>
                <li><a href="#process" className="text-indigo-200 hover:text-white transition-colors">ご相談の流れ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-indigo-100">お問い合わせ</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail size={18} className="text-indigo-200 mr-2 mt-1" />
                  <a href="mailto:contact@example.com" className="text-indigo-200 hover:text-white transition-colors">
                    contact@example.com
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="text-indigo-200 mr-2 mt-1" />
                  <span className="text-indigo-200">03-XXXX-XXXX</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="text-indigo-200 mr-2 mt-1" />
                  <span className="text-indigo-200">東京都渋谷区</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300 text-sm">
          <p>&copy; {new Date().getFullYear()} 竹内コンサルティング. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;