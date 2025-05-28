/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        darkBlue: {
          50: 'hsl(var(--color-darkBlue-50) / <alpha-value>)',
          100: 'hsl(var(--color-darkBlue-100) / <alpha-value>)',
          200: 'hsl(var(--color-darkBlue-200) / <alpha-value>)',
          300: 'hsl(var(--color-darkBlue-300) / <alpha-value>)',
          400: 'hsl(var(--color-darkBlue-400) / <alpha-value>)',
          500: 'hsl(var(--color-darkBlue-500) / <alpha-value>)',
          600: 'hsl(var(--color-darkBlue-600) / <alpha-value>)',
          700: 'hsl(var(--color-darkBlue-700) / <alpha-value>)',
          800: 'hsl(var(--color-darkBlue-800) / <alpha-value>)',
          900: 'hsl(var(--color-darkBlue-900) / <alpha-value>)',
          950: 'hsl(var(--color-darkBlue-950) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};