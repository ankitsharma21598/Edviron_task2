/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ghostwhite: "#fafbff",
        "secondary-primary-white": "#fff",
        darkslateblue: "#2b3674",
        "secondary-grey-600": "#a3aed0",
        "secondary-grey-400": "#e9edf7",
        black: "#000",
        aliceblue: "rgba(239, 244, 251, 0.73)",
        lightskyblue: "#6ad2ff",
        blue: "#4318ff",
        darkgray: "#acacac",
        lavender: "#f2efff",
        dimgray: "#4f4f4f",
        whitesmoke: "#f0f0f0",
        darkslategray: {
          "100": "#333",
          "200": "#292d32",
        },
        forestgreen: "#00ac4f",
        gray: {
          "100": "#838383",
          "200": "#757575",
        },
        lightslategray: "#9197b3",
        blueviolet: "#5932ea",
      },
      fontFamily: {
        "body-text-small-bold": "'DM Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "11xl": "30px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lg: "18px",
      xs: "12px",
      "3xl": "22px",
      "5xs": "8px",
      "13xl": "32px",
      "3xs": "10px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
