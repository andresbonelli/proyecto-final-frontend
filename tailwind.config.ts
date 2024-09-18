import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: ["MontserratRegular"],
      MontserratThin: ["MontserratThin"],
      MontserratExtralight: ["MontserratExtralight"],
      MontserratLight: ["MontserratLight"],
      MontserratMedium: ["MontserratMedium"],
      MontserratSemibold: ["MontserratSemibold"],
      MontserratBold: ["MontserratBold"],
      MontserratExtrabold: ["MontserratExtrabold"],
      MontserratBlack: ["MontserratBlack"],
    },
    extend: {
      colors: {
        red: "#F83758",
        softRed: "#FE735C",
        blue: "#3163E2",
        softBlue: "#4392F9",
        pink: "#FD6E86",
        softPink: "#FA7189",
        rose: "#FFCCD5",
        grey: "#A4A9B3",
        softGrey: "F7F7F7",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
