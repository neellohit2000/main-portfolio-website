'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-gray-900">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900">About</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-gray-900">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 