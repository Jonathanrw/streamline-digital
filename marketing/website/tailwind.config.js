/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-neutral': '#F9F9F9',
        'brand-accent': '#3B82F6',
      }
    },
  },
  plugins: [],
}
