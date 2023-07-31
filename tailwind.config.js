/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "399px",
        xsm: "384px",
      },
      height: {
        86: "21rem",
        95: "23rem",
        128: "32rem",
      },
      width: {
        "70%": "70%",
        "30%": "30%",
        86: "21rem",
      },
      letterSpacing: {
        "widest0.25": "0.25em",
      },
    },
  },
  plugins: [],
};
