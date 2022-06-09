module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "soft-blue": "#5368df",
      "soft-red": "#fa5757",
      "grayish-blue": "#9194a1",
      "dark-blue": "#252b46",
      white: "#fff",
      black: "#000",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
