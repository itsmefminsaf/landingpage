import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          1: "#1089d3",
          2: "#12aed1",
          3: "#108cd3",
        },
      },
      boxShadow: {
        xxl: "0px 30px 30px -12px",
      },
      animation: {
        transtateY: "transtateY .3s linear",
      },
      keyframes: {
        transtateY: {
          from: {
            right: "-8rem",
          },
          to: {
            right: "0.25rem",
          },
        },
      },
    },
  },
  plugins: [],
};
