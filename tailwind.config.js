/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#88A69F",
        secondary: "#014437", 
        dark: "#0B3028",
        background: "#DDE7E7", 
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        pacifico: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};
