/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c95c9",
      },
      backgroundImage: {
        authBg: "url('/src/assets/backgrounds/bgAuth.png')",
        flashSaleBg: "url('/src/assets/backgrounds/flashSale.png')",
        gradient:
          "linear-gradient(274.59deg, #19bfef -11.3%, #0dc9ec 50.13%, #00e3d0 111.55%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
