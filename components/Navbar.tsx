'use client';

import { useState } from 'react';
import { Droplets, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Cloudseed Logo" className="w-8 h-8" />
            <span className="font-bold text-xl text-gray-900">Cloudseed</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</a>
            <a href="/products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
            <a href="/services" className="block px-3 py-2 text-gray-700 hover:text-green-600">Services</a>
            <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-green-600">Products</a>
            <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
