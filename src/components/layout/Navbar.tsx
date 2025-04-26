import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Introduction', href: '#introduction' },
  { name: 'Literature', href: '#literature' },
  { name: 'Solution', href: '#solution' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Implementation', href: '#implementation' },
  { name: 'Results', href: '#results' },
  { name: 'Test Models', href: '#testing' },
  { name: 'Conclusion', href: '#conclusion' },
  { name: 'References', href: '#references' },
  { name: 'Team', href: '#team' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= position + 300) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="font-semibold text-lg md:text-xl text-green-800 flex items-center gap-2"
            onClick={closeMenu}
          >
            <span className={`h-2 w-2 rounded-full ${scrolled ? 'bg-green-700' : 'bg-white'}`}></span>
            Snake Classification
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm hover:text-green-700 transition-colors ${
                  activeSection === link.href.substring(1) 
                    ? 'text-green-700 font-medium' 
                    : scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              className="flex items-center gap-1 text-sm border border-green-700 hover:bg-green-700 transition-colors px-3 py-1.5 rounded-full hover:text-white text-green-800"
            >
              Download Report <ChevronRight size={16} />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} className={scrolled ? 'text-gray-700' : 'text-white'} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm py-2 px-4 rounded hover:bg-green-50 hover:text-green-700 transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-green-700 font-medium bg-green-50' : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#" 
              className="flex items-center gap-1 justify-center text-sm bg-green-700 text-white px-3 py-2 rounded-md hover:bg-green-800 transition-colors mt-2"
              onClick={closeMenu}
            >
              Download Report <ChevronRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}