/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32',
        secondary: '#1A2E1A',
        accent: '#E8F5E9',
        'primary-light': '#4CAF50',
        'primary-dark': '#1B5E20',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
      fontSize: {
        'dynamic-base': 'var(--dynamic-font-size, 1rem)',
      },
    },
  },
  plugins: [],
} 