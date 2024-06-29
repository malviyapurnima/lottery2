/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    
    },
    extend: {
      fontSize: {
        "text-5xl": [
          "3rem",
          {
            lineHeight: "73px",
            fontWeight: "500",
          },
        ],
        "text-title": [
          "45px",
          {
            lineHeight: "45px",
            fontWeight: "600",
          },
        ],
        "text-4xl": [
          "40px",
          {
            lineHeight: "50px",
            fontWeight: "600",
          },
        ],
        "text-36": [
          "36px",
          {
            lineHeight: "45px",
            fontWeight: "600",
          },
        ],
        "text-22": [
          "22px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        "text-2xl": [
          "24px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        "text-lg": [
          "18px",
          {
            lineHeight: "23px",
            fontWeight: "600",
          },
        ],
        "text-sm": [
          "20px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
        "text-xs": [
          "12px",
          {
            lineHeight: "15px",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        transparent: "transparent",
        primary: {
          dark: "#0B3447",
          light: "#116F80",
        },
        secondary: {
          dark: "#FF3131",
          light: "#FF914D",
        },
        white: "#FFFFFf",
        darkBlue: "#282846",
        grey: {
          darker: "#6F6F6F",
          dark: "#D9D9D9",
          light: "#CFCACA",
        },
        buttons: {
          darkOrange: "#FF3131",
          lightOrange: "#FF914D",
        },
      },
      boxShadow: {
        shadow: "0px -1px 20px -6px #00000040",
        shadowCard: "0px 2px 12px 0px #00000040",
        shadowTop: "0px 4px 20px 0px #00000040",
      },
    },
    fontFamily: {
      sans: ["Outfit"],
      serif: ["Outfit"],
      mono: ["Outfit"],
      display: ["Outfit"],
      body: ["Outfit"],
    },
  },
  plugins: [],
};
