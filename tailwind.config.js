module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        background: "url('img/background.svg')",
      },
    },
    variants: {
      extend: {
        opacity: ["disabled"],
        backgroundColor: ["disabled"],
        textColor: ["disabled"],
      },
    },
    plugins: [],
  },
};
