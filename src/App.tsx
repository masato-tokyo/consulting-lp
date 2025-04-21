import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Skills from './components/Skills';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = '竹内コンサルティング | 経営の壁打ちパートナー';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Skills />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;