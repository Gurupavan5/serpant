import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = 1 - scrollY / 500;
      const translateY = scrollY * 0.5;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = opacity > 0 ? String(opacity) : '0';
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToIntroduction = () => {
    const element = document.getElementById('introduction');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.pexels.com/photos/2679440/pexels-photo-2679440.jpeg?auto=compress&cs=tinysrgb&w=1600")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-950/30"></div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 relative z-10 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Snake Classification as Venomous and Non-Venomous through Deep Learning Models
          </h1>
          
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Using advanced deep learning techniques to accurately classify snakes and potentially save lives.
          </p>
          
          <button 
            onClick={scrollToIntroduction}
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium inline-flex items-center transition-all duration-300 hover:shadow-lg"
          >
            Explore Project <ChevronDown size={20} className="ml-2" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={scrollToIntroduction}
          className="text-white p-2 rounded-full focus:outline-none"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}