module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    textColor: (theme) => theme("colors"),
    textColor: {
      "first-light": "#008cff",
      "last-light": "#4d4d4d",
      "nav-link-light": "#4d4d4d",
      "nav-link-light-hover": "#141414",
      "nav-link-dark-hover": "#f1f1f1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
