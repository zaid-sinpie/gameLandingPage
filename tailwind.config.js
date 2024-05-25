/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Lilita:["Lilita One","sans-serif"],
      },
      keyframes: {
        tick: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        tick: 'tick 60s steps(60) infinite',
      },
    },
  },
  plugins: [],
}