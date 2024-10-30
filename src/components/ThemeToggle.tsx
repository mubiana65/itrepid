import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  // Initialize the theme state based on localStorage or default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Add 'dark' class to HTML element if the theme is dark, otherwise remove it
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Switch between 'light' and 'dark' themes
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-200 dark:bg-orange-600 text-gray-800 dark:text-gray-200 p-2 rounded-full transition-colors"
    >
      {theme === 'light' ? '🌙Dark' : '☀️Light'}
    </button>
  );
};

export default ThemeToggle;
