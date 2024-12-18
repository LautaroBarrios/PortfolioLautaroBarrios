/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "my-background": "url('/src/assets/FOTO.png')",
      },
      screens: {
        s: "300px",
      },
    },
  },
  plugins: [],
};
