/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "hsl(75, 94%, 57%)",
        white: "hsl(0, 0%, 100%)",
        gray700: "hsl(0, 0%, 20%)",
        gray800: "hsl(0, 0%, 12%)",
        gray900: "hsl(0, 0%, 8%)",
        gray600: "hsl(0, 0%, 24%)",
      },
      height: {
        247: "30rem",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": ".625rem",
      },
    },
  },
  plugins: [],
};
