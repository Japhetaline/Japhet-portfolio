import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return true; // Default to dark mode
    
    const saved = localStorage.getItem('theme');
    // Default to dark mode (true) if no saved preference or if saved is 'dark'
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    // Apply theme immediately on mount
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Ensure dark mode is applied on initial load
  useEffect(() => {
    // If no theme is saved, default to dark mode
    const saved = localStorage.getItem('theme');
    if (!saved) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

