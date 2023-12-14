/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-500": "#6d737a",
        "gray-black": "#1b1d1f",
        "primary-50": "#edeff6",
        gray1: "rgba(0, 0, 0, 0.5)",
        darkgray: "#9c9c9c",
        darkslategray: "#434343",
        lightslategray: "#889099",
        "primary-800": "#1e2640",
        whitesmoke: {
          "100": "#eaeaea",
          "200": "#e7e9eb",
        },
        gainsboro: "rgba(226, 226, 226, 0.1)",
        "gray-700": "#363a3d",
        darkslateblue: "#4a60a1",
        "primary-700": "#2c3a61",
        "primary-900": "#0f1320",
      },
      spacing: {},
      fontFamily: {
        "header-heading-4": "'Public Sans'",
        roboto: "Roboto",
        poppins: "Poppins",
        "body-large-400": "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "11xs-5": "1.5px",
      },
    },
    fontSize: {
      "5xl": "24px",
      "3xl": "22px",
      base: "16px",
      xl: "20px",
      "21xl": "40px",
      "xs-6": "11.6px",
      "2xs-8": "10.8px",
      "sm-6": "13.6px",
      "mini-5": "14.5px",
      "26xl": "45px",
      lg: "18px",
      "13xl": "32px",
      "45xl": "64px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
