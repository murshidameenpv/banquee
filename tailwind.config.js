/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        courier: ["Courier", "sans-serif"],
      },
      colors: {
        primary: "#5BB5A2",
        bgPrimary: "#FFFFFF",
        bgSecondary: "#E8F2EE",
        bgGray: "#F8F8F8",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
