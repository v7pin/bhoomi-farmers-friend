/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
        raleway: ["Raleway"],
        kalam: ["Kalam"],
        yatra: ["Yatra One"],
        mukta: ["Mukta"],
      },
    },
  },
  plugins: [],
};
