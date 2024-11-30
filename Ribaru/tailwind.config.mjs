/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        recursive: ['Recursive', 'sans-serif'],
      },
      colors: {
        'ribaru-blue': '#0A1FDA',
      }
    },
  },
  plugins: [
    forms,
  ],
}
