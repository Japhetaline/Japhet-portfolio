import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < lastScroll || currentScroll < 100);
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', icon: 'fa-home', label: 'Home' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'portfolio', icon: 'fa-briefcase', label: 'Portfolio' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-4 bg-primary/80 dark:bg-primary-light/80 backdrop-blur-lg rounded-2xl p-3 shadow-lg">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-secondary dark:bg-secondary-light text-white shadow-lg'
                : 'bg-white/10 dark:bg-gray-800/10 text-white/70 dark:text-gray-700 hover:bg-white/20 dark:hover:bg-gray-800/20'
            }`}
            title={item.label}
          >
            <i className={`fas ${item.icon}`}></i>
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNav"
                className="absolute -left-2 w-1 h-8 bg-secondary dark:bg-secondary-light rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default Navigation;

