/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['GeneralSans', 'sans-serif'],
      },
      colors: {
        'black-200': '#232325',
        'black-300': '#1a1a1c',
      },
    },
  },
  plugins: [],
}

