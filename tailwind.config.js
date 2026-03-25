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
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-card': 'rgb(var(--color-bg-card) / <alpha-value>)',
        'grid-line': 'rgb(var(--color-grid-line) / <alpha-value>)',
        orange: 'rgb(var(--color-orange) / <alpha-value>)',
        blue: 'rgb(var(--color-blue) / <alpha-value>)',
        green: 'rgb(var(--color-green) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'syntax-keyword': 'rgb(var(--color-syntax-keyword) / <alpha-value>)',
        'syntax-string': 'rgb(var(--color-syntax-string) / <alpha-value>)',
        'syntax-comment': 'rgb(var(--color-syntax-comment) / <alpha-value>)',
        'syntax-field': 'rgb(var(--color-syntax-field) / <alpha-value>)',
        'syntax-type': 'rgb(var(--color-syntax-type) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--color-orange) / <alpha-value>)',
          dark: '#E08000',
        }
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pan-grid': 'panGrid 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
        'pulse-glow-blue': 'pulseGlowBlue 2s infinite ease-in-out',
        'blink': 'blink 1s step-end infinite',
        'section-fade': 'sectionFadeIn 0.8s forwards'
      },
      keyframes: {
        panGrid: {
          '100%': { backgroundPosition: '40px 40px' },
        },
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(248,152,32,0.4))', opacity: '0.8' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(248,152,32,0.8))', opacity: '1' },
        },
        pulseGlowBlue: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px rgba(0,212,255,0.4))', opacity: '0.8' },
          '50%': { filter: 'drop-shadow(0 0 15px rgba(0,212,255,0.8))', opacity: '1' },
        },
        blink: {
          '50%': { opacity: '0' }
        },
        sectionFadeIn: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      fontSize: {
        'dynamic-base': 'var(--dynamic-font-size, 1rem)',
      },
    },
  },
  plugins: [],
} 