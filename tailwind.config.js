/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "sans-serif"],
      },
      keyframes: {
        image: {
          '0%, 100%': { "border-radius": '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { "border-radius": '30% 60% 70% 40%/50% 60% 30% 60%' },
        }
      },
      animation: {
        image: 'image 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

