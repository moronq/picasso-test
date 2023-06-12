/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'filter-border': 'inset 0 0 0 1px grey'
      },
      transitionProperty: {
        height: 'height'
      }
    }
  },
  plugins: []
}
