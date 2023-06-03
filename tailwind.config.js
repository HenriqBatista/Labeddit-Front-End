/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#4088CB",
      gray: {
        header: "#EDEDED",
        mid: "#A3A3A3",
        inputBorder: "#D5D8DE",
        inputText: "#323941",
        inputPost: "#6F6F6F",
        cardBg: "#FBFBFB",
        cardBorder: "#E0E0E0",
      },
      orange: {
        border: "#F9B24E",
        text: "#FE7E02",
      },
      rose: "#FF6489",
      red: "#e11d48",
      purple: "#8b5cf6",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontFamily: {
      ibm: ["IBM Plex Sans", "sans-serif"],
      noto: ["Noto Sans", "sans-serif"],
    },
    extend: {},
  },
};