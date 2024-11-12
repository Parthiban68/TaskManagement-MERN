/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#E1A140', 
        sand: '#EFCFA0',
        puce:'#532200',
        orange:'#914110'
      },
    },
  },
  plugins: [],
}

