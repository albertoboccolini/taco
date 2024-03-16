import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{tsx,js,ts,jsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "taco-button-bg": "#163146",
                "taco-dark-primary": "#212121",
                "taco-dark-secondary": "#393939",
                "taco-dark-button": "#15435A"
            },
        },
    },
    plugins: []
};
export default config;
