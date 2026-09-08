/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          crail: '#C15F3C',
          cloudy: '#2C2A26',
          pampas: '#F4F3EE',
          white: '#FFFFFF',
        },
        primary: '#fbb1bd',
        secondary: '#a3e4d7',
        background: '#00509d',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
        serif: ['Urbanist', 'sans-serif'],
      },
      spacing: {
        'unit': '8px',
        'container-max': '1200px',
        'gutter': '24px',
        'margin-mobile': '16px',
        'margin-desktop': '48px',
        'stack-sm': '12px',
        'stack-md': '24px',
        'stack-lg': '48px',
      },
      borderRadius: {
        'sm': '0.25rem',
        DEFAULT: '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        'full': '9999px',
      }
    },
  },
  plugins: [],
}

