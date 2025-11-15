import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-secondary dark:bg-secondary-light text-white dark:text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <motion.i
        key={isDark ? 'moon' : 'sun'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`fas ${isDark ? 'fa-moon' : 'fa-sun'} text-xl`}
      />
    </motion.button>
  );
};

export default ThemeToggle;

