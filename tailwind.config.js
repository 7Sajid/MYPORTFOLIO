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
        background: '#0b0f0c',
        primary: '#00d060',
      },
      fontFamily: {
        sans: ['"Fira Code"', 'monospace'],
        mono: ['"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [],
}
