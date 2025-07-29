import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    // { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-teal-400/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              // animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {/* <Code2 className="w-10 h-10 text-teal-400 group-hover:text-green-400 transition-colors duration-300" /> */}
              <motion.img
    src="images/logo.png"
    alt="Logo"
    className="w-10 h-10 object-contain"
    initial={{ scale: 1 }}
    // animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 2, repeat: Infinity }}
  />
              <motion.div
                className="absolute inset-0 w-10 h-10 border-2 border-teal-400/30 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
            Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-slate-300 hover:text-teal-400 transition-all duration-300 font-medium group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-green-400 group-hover:w-full transition-all duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-teal-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  whileHover={{ scale: 1.1 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-teal-400 transition-colors p-2"
              whileTap={{ scale: 0.95 }}
              whileHover={{ rotate: 90 }}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-slate-900/95 backdrop-blur-xl rounded-2xl mt-4 p-6 border border-teal-400/20"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-slate-300 hover:text-teal-400 transition-colors font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;