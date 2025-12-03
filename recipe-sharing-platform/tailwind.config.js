// tailwind.config.js (CommonJS Syntax)

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🛑 THIS 'content' ARRAY AUTOMATICALLY ENABLES PURGING 🛑
  // Tailwind will scan these files for class usage and remove all others
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  
  // 'darkMode: false' is the default; you can often omit this.
  // Consider changing to 'media' for automatic dark mode support:
  darkMode: 'media', 
  
  theme: {
    extend: {},
  },
  plugins: [],
};