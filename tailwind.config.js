/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        cream: {
          50: '#f9f8f3',
          100: '#f4f2e9',
          200: '#e9e5d3',
          300: '#ded7be',
          400: '#c8bd98',
          500: '#b6a577',
          600: '#a08a5d',
          700: '#85714e',
          800: '#6d5d44',
          900: '#5a4d3b',
          950: '#2e271c',
        },
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};