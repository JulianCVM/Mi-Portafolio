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
        bg: '#050A18',
        'bg-card': '#080F22',
        'grid-line': '#0A1830',
        orange: '#F89820',
        blue: '#00D4FF',
        green: '#39FF14',
        text: '#E8EDF5',
        muted: '#4A5568',
        border: '#112240',
        'syntax-keyword': '#00D4FF',
        'syntax-string': '#CE9178',
        'syntax-comment': '#6A9955',
        'syntax-field': '#E8EDF5',
        'syntax-type': '#F89820',
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