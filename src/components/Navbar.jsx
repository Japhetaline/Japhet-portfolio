import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/80 dark:bg-primary-light/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl md:text-2xl font-bold text-secondary dark:text-secondary-light"
          >
            Japhet Damassoh
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-secondary dark:text-secondary-light bg-secondary/10 dark:bg-secondary-light/10'
                      : 'text-white/80 dark:text-gray-700 hover:text-secondary dark:hover:text-secondary-light hover:bg-white/5 dark:hover:bg-gray-800/10'
                  }`}
                >
                  <Icon 
                    size={18} 
                    className={`transition-all duration-300 ${
                      activeSection === item.id ? 'scale-110' : ''
                    }`}
                  />
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary dark:bg-secondary-light rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white dark:text-gray-800 p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="transition-transform duration-300" />
              ) : (
                <Menu size={24} className="transition-transform duration-300" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary/95 dark:bg-primary-light/95 backdrop-blur-lg border-t border-white/10 dark:border-gray-700/10"
          >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-secondary/20 text-secondary dark:text-secondary-light shadow-lg'
                      : 'text-white/80 dark:text-gray-700 hover:bg-white/10 dark:hover:bg-gray-800/10'
                  }`}
                >
                  <Icon 
                    size={20} 
                    className={activeSection === item.id ? 'scale-110' : ''}
                  />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

