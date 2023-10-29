/** @type {import('tailwindcss').Config} */

// module.exports = {
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // CANNOT HAVE SPACES BETWEEN 'js,ts,jsx,tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}