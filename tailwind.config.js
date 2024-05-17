/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FAFAFA',
        'secondary': '#FFFFFF',
        'Blue': '#02274F',
        'profile': '#F1F5F9',
        'white2': '#F4F4F4'
      },
      fontFamily: {
        'nunito': 'Nunito, sans-serif',
      }
    },
  },
  plugins: [],
}

