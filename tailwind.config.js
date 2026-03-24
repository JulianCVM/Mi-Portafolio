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
        jp: {
          red: '#c92222',
          darkred: '#901e1e',
          black: '#111111',
          bg: '#f8f8f8',
          gray: '#e5e5e5',
          lightgray: '#f0f0f0',
        }
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