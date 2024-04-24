/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpal: {
          1: "rgba(17, 25, 40, 0.75)",
          2: "rgba(17, 25, 40, 0.5)",
          3: "rgba(17, 25, 40, 0.65)",
          4: "rgba(17, 25, 40, 0.1)",
          5: "rgba(17, 25, 40, 1)",
        },
      },
    },
  },
  plugins: [],
};
