import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#330000',
          200: '#661A1A',
          300: '#992D2D',
          400: '#CC4949',
          500: '#FF6363',
          600: '#FF7D7D',
          700: '#FF9999',
          800: '#FFB3B3',
          900: '#FFCCCC',
        },
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
