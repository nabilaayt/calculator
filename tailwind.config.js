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
        light: "#FFFFF5",
        dark: "#3E3E3E",
        btnLight: "#FFFFF5",
        btnDark: "#09122C",
        btnRight: "#7743DB",
        red: "#F95B53",
        yellow: "#F9CB37",
        black: "#3E3E3E",
        white: "#FEFEFF",
        gray: "#636363",
      },
      fontFamily: {
        poppinsReguler: ["Poppins-Reguler"],
        poppinsMedium: ["Poppins-Medium"],
        poppinsBold: ["Poppins-Bold"],
      },
    },
  },
  plugins: [],
}

