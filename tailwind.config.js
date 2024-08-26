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
        white1: "rgb(229 231 235)",
        white2: "#ededed",
        white3: "#e2e2e2",
        black1: "#141414",
        black2: "#232121",
        gray1: "#2a2a2a",
        gray2: "#373737",
        gray3: "#a5a5a5",
        gray4: "#d3d3d3",
        gray5: "#d8d8d8",
        blue1: "#0575e6",
        blue2: "#021B79",
      },
    },
  },
  plugins: [],
}
