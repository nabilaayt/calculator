/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: "#FBFBFB",
        dark: "#0C263B",
        btnLight: "#F6F5F2",
        btnDark: "#09122C",
        btnRight: "#7743DB",
        black: "#171617",
        white: "#FEFEFF",
        gray: "#F2F2F4",
      }
    },
  },
  plugins: [],
}

