/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        brand: {
          brand: '#1975FF',
          hoverPrimary: '#0052CC',
          extraLight: '#CCE0FF'
        },
        indicator: {
          focusedAlternative: '#CCE0FF'
        }
      }
    }
  },
  plugins: []
};
