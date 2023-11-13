/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-500-50': 'rgba(219, 39, 119, 0.5)',
        'violet-500-50': 'rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
}

