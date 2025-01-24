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
          900: "#373843",
          950: "#0e0e11",
        },
      },
    },
  },
  plugins: [],
};
