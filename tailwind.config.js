/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        tamil: ['"Noto Serif Tamil"', 'serif'],
        tamilSans: ['"Noto Sans Tamil"', 'sans-serif'],
      },
      colors: {
        gold: {
          50:  '#FFF8E7',
          100: '#F9E4B7',
          200: '#F0C96B',
          300: '#E8A820',
          400: '#C8860A',
          500: '#A06808',
          600: '#7A4E06',
          700: '#5C3904',
          800: '#3E2603',
          900: '#6B2E1A',
        },
      },
      animation: {
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'float-med':  'floatMed 4s ease-in-out infinite',
        'petal':      'petal 10s linear infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'diya':       'diya 1.5s ease-in-out infinite alternate',
        'lamp-swing': 'lampSwing 3s ease-in-out infinite alternate',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        floatMed: {
          '0%,100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%':     { transform: 'translateY(-12px) rotate(2deg)' },
        },
        petal: {
          '0%':   { transform: 'translateY(-10px) translateX(0) rotate(0deg)',   opacity: 0 },
          '10%':  { opacity: 0.8 },
          '90%':  { opacity: 0.5 },
          '100%': { transform: 'translateY(110vh) translateX(80px) rotate(720deg)', opacity: 0 },
        },
        glow: {
          '0%':   { boxShadow: '0 0 8px rgba(200,134,10,0.4),  0 0 20px rgba(200,134,10,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(200,134,10,0.8), 0 0 40px rgba(200,134,10,0.4)' },
        },
        diya: {
          '0%':   { filter: 'drop-shadow(0 0 6px rgba(255,150,0,0.6))'  },
          '100%': { filter: 'drop-shadow(0 0 18px rgba(255,200,0,0.9))' },
        },
        lampSwing: {
          '0%':   { transform: 'rotate(-8deg)' },
          '100%': { transform: 'rotate(8deg)'  },
        },
      },
    },
  },
  plugins: [],
}
