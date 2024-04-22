/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': { 'primary': '#1dcf5d', 'secondary': '#1fdc62' },
        'light': { 'primary': '#fff', 'secondary': '#a7a7a7' },
        'dark': { 'dark': '#121212', 'light': '#282828', DEFAULT: '#181818', 'lighter': '#3e3e3e' },

      }
    },
  },
  plugins: [],
}