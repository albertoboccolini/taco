import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{tsx,js,ts,jsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "taco-button-bg": "#163146",
            },
        },
    },
    plugins: []
};
export default config;
