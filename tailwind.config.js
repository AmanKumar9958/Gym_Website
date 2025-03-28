/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD700', // Yellow
        secondary: '#1A1A1A', // Black
        accent: '#FFE55C',
      }
    },
  },
  plugins: [],
}