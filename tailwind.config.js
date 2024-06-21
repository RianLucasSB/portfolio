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
        },
        'text-slide': {
          '0%, 26.66%': {
              transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
              transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
              transform: 'translateY(-50%)',
          },
          '100%': {
              transform: 'translateY(-75%)',
          },
      },        
      },
      animation: {
        image: 'image 8s ease-in-out infinite',
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

