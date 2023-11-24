import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-color-dashboard": 'rgb(18, 51, 98)'
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              100: "#CEE6F7",
              200: "#A1CBEF",
              300: "#6A9CCF",
              400: "#3E6BA0",
              500: "#123362",
              600: "#0D2754",
              700: "#091D46",
              800: "#051438",
              900: "#030E2F",
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            success: {
              100: "#E6F8CF",
              200: "#CAF1A1",
              300: "#9AD66C",
              400: "#6AAD42",
              500: "#337715",
              600: "#24660F",
              700: "#17550A",
              800: "#0D4506",
              900: "#063904",
            },
            warning: {
              100: "#FAEDCA",
              200: "#F6D796",
              300: "#E6B360",
              400: "#CD8E37",
              500: "#AD5E05",
              600: "#944903",
              700: "#7C3702",
              800: "#642701",
              900: "#531C00",
            },
            danger: {
              100: "#F9DDCE",
              200: "#F3B6A0",
              300: "#DC7F6C",
              400: "#BA4D43",
              500: "#8C1515",
              600: "#780F18",
              700: "#640A1A",
              800: "#51061A",
              900: "#430419",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              100: "#CEE6F7",
              200: "#A1CBEF",
              300: "#6A9CCF",
              400: "#3E6BA0",
              500: "#123362",
              600: "#0D2754",
              700: "#091D46",
              800: "#051438",
              900: "#030E2F",
              foreground: "#FFFFFF",
              DEFAULT: "#006FEE",
            },
            success: {
              100: "#E6F8CF",
              200: "#CAF1A1",
              300: "#9AD66C",
              400: "#6AAD42",
              500: "#337715",
              600: "#24660F",
              700: "#17550A",
              800: "#0D4506",
              900: "#063904",
            },
            warning: {
              100: "#FAEDCA",
              200: "#F6D796",
              300: "#E6B360",
              400: "#CD8E37",
              500: "#AD5E05",
              600: "#944903",
              700: "#7C3702",
              800: "#642701",
              900: "#531C00",
            },
            danger: {
              100: "#F9DDCE",
              200: "#F3B6A0",
              300: "#DC7F6C",
              400: "#BA4D43",
              500: "#8C1515",
              600: "#780F18",
              700: "#640A1A",
              800: "#51061A",
              900: "#430419",
            },
            // ... rest of the colors
          },
        },
        mytheme: {
          // custom theme
          extend: "dark",
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
export default config;
