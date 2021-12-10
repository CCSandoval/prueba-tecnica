const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        background: "url('img/background.svg')",
        navBackground: "url('img/navBackground.svg')",
      },
    },
    variants: {
      extend: {
        opacity: ["disabled"],
        backgroundColor: ["disabled"],
        textColor: ["disabled"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      blue: colors.blue,
      dark: { normal: "#001122", hover: "#081421" },
    },
    plugins: [],
  },
};
