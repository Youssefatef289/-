import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sofa, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'منتجاتنا', href: '#products' },
    { name: 'من نحن', href: '#about' },
    { name: 'آراء العملاء', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Sofa className={`h-8 w-8 ${scrolled ? 'text-amber-700' : 'text-amber-500'}`} />
            <span className={`mr-2 text-2xl font-black tracking-tighter ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              تاتش فرنيتشر
            </span>
          </motion.div>

          <div className="hidden md:block">
            <div className="mr-10 flex items-center space-x-reverse space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-bold transition-colors ${scrolled ? 'text-gray-700 hover:text-amber-700' : 'text-white/90 hover:text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-amber-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-700 transition duration-300 flex items-center gap-2 shadow-lg shadow-amber-600/20"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل بنا</span>
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-900' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 hover:bg-amber-50 hover:text-amber-700 px-4 py-3 rounded-xl font-bold transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-amber-600 text-white font-bold px-4 py-4 rounded-xl shadow-lg"
              >
                اتصل بنا
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
