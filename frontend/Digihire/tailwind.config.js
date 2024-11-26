/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Black-Pearl": "#0b1e33",
        "Gray-Bg": "#f1f2f4",
        "blue-light": "#013C58",
        "light-gray": "#AAAEB4",
      },
    },
    plugins: [],
  },
};
