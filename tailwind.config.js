/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        textGrad: "linear-gradient(#f45, #a87)",
      },
      animation: {
        fade: "fade 3s",
      },
    },
  },
  plugins: [],
};
