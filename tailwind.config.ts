import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlack: "#181717",
        customWhite: "#fdfdfd",
        customGray: "#868686",
        outlineGray: "rgb(43,43,43)",
        customOffWhite: "#c9c9c9",
        customEmerald: "#009B77",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      screens: {
        sm: "700px", // Custom media query for min-width: 700px
        customMd: "900px", // custom media query for 900px
        customXL: "1364px", // custom xl mq for vertical line
        customXXL: "1600px",
        customXS: "541px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
