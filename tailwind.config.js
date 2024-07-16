/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, var(--black-60, rgba(33, 33, 33, 0.6)), var(--black-60, rgba(33, 33, 33, 0.6)))',

      },
      backgroundColor: {
        'backgrounds': 'rgba(33, 33, 33, 0.3)',
        'backgroundImg': 'rgba(16, 131, 230, 0.4)',
        'backgroundImage': 'rgba(16, 131, 230, 0.8)'
      }
    },
  },
  plugins: [],
}

