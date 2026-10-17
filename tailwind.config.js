/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          400: '#adeb33',
          300: '#c2f84f',
          500: '#94d31d',
        },
        dark: {
          bg: '#000000',
          card: '#0a0a0a',
          surface: '#0d0d0d',
          border: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        league: ["'League Gothic'", "Helvetica", "sans-serif"],
        londrina: ["'Londrina Solid'", "Helvetica", "cursive", "sans-serif"],
        anton: ["'Anton'", "Helvetica", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
