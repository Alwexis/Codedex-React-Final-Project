/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "pixeloid-mono": ["Pixeloid Mono", "monospace"],
        "pixeloid": ["Pixeloid", "sans-serif"],
        "silver": ["Silver", "sans-serif"],
      }
    },
  },
  plugins: [],
}

