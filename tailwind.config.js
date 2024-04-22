/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpal: {
          1: "rgba(17, 25, 40, 0.75)",
        },
      },
    },
  },
  plugins: [],
};
