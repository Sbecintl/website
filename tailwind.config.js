/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          offRed: "#FD0000ff",
          darkGray: "#333333ff",
          black: "#000000ff",
          gray: "#505050ff",
          white: "#FFFFFFff",
          night: "#0C0C0Cff",
          platinum: "#E3E3E3ff",
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out ",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
