import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Introduction from './components/sections/Introduction';
import LiteratureReview from './components/sections/LiteratureReview';
import ProposedSolution from './components/sections/ProposedSolution';
import Methodology from './components/sections/Methodology';
import Implementation from './components/sections/Implementation';
import Results from './components/sections/Results';
import Conclusion from './components/sections/Conclusion';
import References from './components/sections/References';
import Team from './components/sections/Team';
import Testing from './components/sections/Testing';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Snake Classification Research Project';
    
    // Set up smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <Introduction />
        <LiteratureReview />
        <ProposedSolution />
        <Methodology />
        <Implementation />
        <Results />
        <Testing />
        <Conclusion />
        <References />
        <Team />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;