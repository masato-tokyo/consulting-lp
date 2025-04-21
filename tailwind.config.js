/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c9d8ff',
          300: '#a4bfff',
          400: '#789bff',
          500: '#5478ff',
          600: '#3a56f9',
          700: '#2d42e7',
          800: '#2934bd',
          900: '#262f94',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};