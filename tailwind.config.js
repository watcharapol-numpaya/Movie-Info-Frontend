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
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "160rem",
        176: "44rem",
        192: "52rem",
      },
      width: {
        "70%": "70%",
        "30%": "30%",
        86: "21rem",
        95: "23rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "160rem",
        176: "44rem",
        192: "52rem",
      },
      letterSpacing: {
        "widest0.25": "0.25em",
      },
    },
  },
  plugins: [],
};
