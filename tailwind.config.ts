import type { Config } from "tailwindcss";

const config: Config = {
  blocklist: undefined,
  corePlugins: undefined,
  darkMode: undefined,
  experimental: undefined,
  future: undefined,
  important: undefined,
  prefix: "",
  presets: undefined,
  safelist: undefined,
  separator: "",
  content: [
    "./converter/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans'],
      }
    },
  },
  plugins: []
};
export default config;
