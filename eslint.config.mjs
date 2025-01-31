// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
    extends: [
        eslint.configs.recommended,
        tseslint.configs.recommended,
        tseslint.configs.stylistic
    ],
    rules: {
        "no-console": ["warn", { allow: ["error"] }],
        "no-unused-vars": ["error", { argsIgnorePattern: "^_$" }],
        quotes: ["warn", "single"],
        semi: ["error", "always"],
        eqeqeq: ["error", "always"],
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    },
    ignores: [
        "components/ui/**/*",
        "**/*.config.*",
        "node_modules/",
        ".next/",
        ".git/",
        ".vscode/",
        ".github/",
        ".idea/",
        "lib/utils.ts"
    ],
});