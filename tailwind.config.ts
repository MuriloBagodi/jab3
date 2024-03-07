import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-texture":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/backgroundHero.jpg')",
      },
      colors: {
        amber: { DEFAULT: "#FFBF00" },
        header: { DEFAULT: "rgb(25, 25, 36)" },
      },
    },
  },
  plugins: [],
};
export default config;
