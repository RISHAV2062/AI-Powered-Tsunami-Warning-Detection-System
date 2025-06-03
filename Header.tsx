import React, { useState, useEffect } from 'react';
import { Menu, X, Github, LifeBuoy, Code2 } from 'lucide-react';

const Header = () => {
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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Code4Good</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600 transition-colors">Demo</a>
            <a href="#stats" className="text-gray-700 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#shortcuts" className="text-gray-700 hover:text-blue-600 transition-colors">Shortcuts</a>
            <a href="#community" className="text-gray-700 hover:text-blue-600 transition-colors">Community</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#download" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Download
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-4 py-5 space-y-4">
            <a 
              href="#features" 
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#stats" 
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Impact
            </a>
            <a 
              href="#shortcuts" 
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shortcuts
            </a>
            <a 
              href="#community" 
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Community
            </a>
            <a 
              href="#download" 
              className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;