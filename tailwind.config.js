/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#191d2b',
          light: '#ffffff',
        },
        secondary: {
          DEFAULT: '#27ae60',
          light: '#f56692',
        },
        accent: {
          DEFAULT: '#27ae60',
          light: '#f56692',
        },
        gray: {
          50: '#f8f8f8',
          100: '#dbe1e8',
          200: '#b2becd',
          300: '#6c7983',
          400: '#454e56',
          500: '#2a2e35',
          600: '#12181b',
          700: '#6c7983',
          800: '#454e56',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 3px 15px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(39, 174, 96, 0.5)',
      },
    },
  },
  plugins: [],
}

