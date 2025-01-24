/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "blue-romance": {
         '50': '#ecf8ff',
        '100': '#d5eeff',
        '200': '#b3e3ff',
        '300': '#7fd4ff',
        '400': '#44b9ff',
        '500': '#1996ff',
        '600': '#0174ff',
        '700': '#005dfa',
        '800': '#034aca',
        '900': '#0a429e',
        '950': '#0a2351',
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
