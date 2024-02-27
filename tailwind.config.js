/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBanner: "url('./BG.png')",
      }
    },
    colors: {
      'color-primary': '#00AAFF',
      'color-white': '#FFFFFF'
    }
  },
  plugins: [],
}
