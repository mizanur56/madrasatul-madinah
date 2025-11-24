/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#052e16',
          green: '#166534',
          accent: '#f97316',
        },
      },
      fontFamily: {
        bangla: ['Hind Siliguri', 'Noto Sans Bengali', 'SolaimanLipi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

