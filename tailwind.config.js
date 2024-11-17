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
        xxl: "0px 15px 30px -12px",
        inverted_radius: "1rem -1.5rem 0px 0px",
      },
      animation: {
        scaleY: "scaleY .3s linear",
      },
      keyframes: {
        scaleY: {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
    },
  },
  plugins: [],
};
