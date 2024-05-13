/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          offRed: "#FD0000ff",
          black: "#000000ff",
          gray: "#505050ff",
          white: "#FFFFFFff",
          night: "#0C0C0Cff",
          platinum: "#E3E3E3ff",
        },
      },
      animation: {
        dropBounce: "dropBounce 1s ease-in-out infinite",
        slideIn: "slideIn 5s ease-in-out infinite",
        fadeIn: "fadeIn 2s ease-in-out ",
      },
      keyframes: {
        drop: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },

        dropBounce: {
          "0%": { top: -"300px" },
          "40%": { top: "0px" },
          "70%": { top: -"5px" },
          "100%": { top: "0px" },
        },

        slideIn: {
          "0%": { left: -"200px" },
          "100%": { left: "0px" },
        },

        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
