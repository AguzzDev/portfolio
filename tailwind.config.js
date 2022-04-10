module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        main: ["main", "sans-serif"],
        mainBold: ["mainBold", "sans-serif"],
        main2: ["main2", "sans-serif"],
      },
      colors: {
        white1: "#FCFCFC",
        white2: "#ededed",
        black1: "#141414",
        black2: "#232121",
        gray1: "#2a2a2a",
        gray2: "#373737",
        blue1: "#0575e6",
        blue2: "#021B79",
      },
    },
  },
  plugins: [],
}
