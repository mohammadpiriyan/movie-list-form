/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iransans: ["sans-serif"],
      },
      screens: {
        xsm: { min: "550px", max: "769px" },
        xxsm: { min: "200px", max: "550px" },
      },
    },
  },
  plugins: [],
};
