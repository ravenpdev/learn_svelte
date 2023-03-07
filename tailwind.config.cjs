const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    colors: {
      primary: colors.purple,
      secondary: colors.pink,
      info: colors.sky,
      success: colors.teal,
      warning: colors.yellow,
      error: colors.red,
      zinc: colors.zinc,
    },
  },
  plugins: [],
};
