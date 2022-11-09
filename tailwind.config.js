/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  mode: "jit",
  theme: {
    extend: {
      colors: {
        whiteprimary: "#FFFFFF",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "#F5F5F7",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        redcolor: "#f45c43",
        greencolor: "#1ECD97",
        darkprimary: "#00040f"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};