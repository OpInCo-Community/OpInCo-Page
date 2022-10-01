/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "neutral-100": "#F6F6F6",
        "neutral-200": "#DCDCDC",
        "neutral-300": "#3D4244",
        "neutral-400": "#0C0C0C",
        "accent-100": "#81DAC2",
        "accent-200": "#13A89E",
      },
    },
  },
  plugins: [],
}
