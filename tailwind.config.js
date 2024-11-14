/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        mx: "480px",
        xm: "560px",
        sm: "768px",
        md: "960px",
        dl: "1080px",
        lg: "1194px",
        xl: "1280px",
        xxl: "1560px",
        xxxl: "2180px",
      },
      colors: {
        primary: "#1c95c9",
      },
      backgroundImage: {
        authBg: "url('/src/assets/backgrounds/bgAuth1.png')",
        appBg: "url('/src/assets/backgrounds/bgApp.png')",
        flashSaleBg: "url('/src/assets/backgrounds/flashSale.png')",
        gradient:
          "linear-gradient(274.59deg, #19bfef -11.3%, #0dc9ec 50.13%, #00e3d0 111.55%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
