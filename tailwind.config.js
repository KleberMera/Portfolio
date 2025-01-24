/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "blue-romance": {
          50: "#effaf2",
          100: "#d7f4dd",
          200: "#c5edcf",
          300: "#81d49b",
          400: "#4cbb72",
          500: "#2a9f56",
          600: "#1b8044",
          700: "#166638",
          800: "#14512e",
          900: "#114328",
          950: "#082616",
        },
        smoke: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          300: "#b8b9c1",
          400: "#91939f",
          500: "#737584",
          600: "#5d5e6c",
          700: "#4c4d58",
          800: "#41414b",
          900: "#373843",
          950: "#0e0e11",
        },
      },
    },
  },
  plugins: [],
};
