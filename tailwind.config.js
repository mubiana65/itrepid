module.exports = {
  darkMode: 'class', // Enables dark mode using the 'dark' class
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color palette for dark mode
        darkBackground: '#1e293b',
        darkText: '#e2e8f0',
        lightBackground: '#ffffff',
        lightText: '#1f2937',
      },
    },
  },
  plugins: [],
};
