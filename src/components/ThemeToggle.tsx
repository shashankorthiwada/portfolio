'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleTheme();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2 text-gray-400 rounded-lg">
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 
               hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all duration-300 
               group border border-transparent hover:border-blue-200 dark:hover:border-blue-700
               hover:shadow-lg"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode (Ctrl+K)`}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 180 : 0,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut",
          scale: {
            duration: 0.2,
            ease: "easeInOut"
          }
        }}
      >
        {theme === 'light' ? (
          <Moon size={20} className="group-hover:animate-bounce-gentle" />
        ) : (
          <Sun size={20} className="group-hover:animate-bounce-gentle" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 