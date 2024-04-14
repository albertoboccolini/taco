import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{tsx,js,ts,jsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "taco-button-bg": "#163146",
                "taco-dark-primary": "#121212",
                "taco-dark-secondary": "#292929",
                "taco-dark-button": "#15435A"
            },
        },
    },
    plugins: []
};
export default config;
