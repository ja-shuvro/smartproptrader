/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: ["./**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#ffd700",
        "primary-color-dark": "#c1a200",
        "secondary-color": "#2e2e60",
        "primary-dark": "#191919",
      },
      boxShadow: {
        "3xl": "0 8px 30px rgba(224, 109, 33, 0.25)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
