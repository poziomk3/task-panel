/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        danger: {
          "0%, 100%": { 'background-color': "rgb(239 68 68 / 0.4)" },
          "50%": {  'background-color':'inherit' },
        },
      },
      animation: {
        danger: "danger 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
