/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Enables dark mode toggle via class
  theme: {
    extend: {
      colors: {
        // Optional: custom colors
        primary: '#2563eb',
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
};