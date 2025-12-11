import type { Config } from "tailwindcss";

const config: Config = {
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
        // Azuis escuros
        navy: {
          900: "#000D1C",
          800: "#001126",
          700: "#00183A",
        },
        // Cinzas
        silver: {
          100: "#DDDDDB",
          200: "#ACADB5",
          300: "#9595A0",
          400: "#676977",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
