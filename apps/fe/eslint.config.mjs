import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import nx from "@nx/eslint-plugin";

import baseConfig from "../../eslint.config.mjs";

export default [
  ...baseConfig,
  ...nx.configs["flat/react"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: reactPlugin,
    },
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Semicolon enforcement
      semi: ["error", "always"],

      // Unused variable warning
      "@typescript-eslint/no-unused-vars": ["warn"],

      // Quotes
      quotes: ["error", "single", { avoidEscape: true }],
      "jsx-quotes": ["error", "prefer-single"],

      // Indentation
      indent: ["error", 4],

      // Import sorting
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],

      // Ignore useEffect dependencies (use with caution)
      "react-hooks/exhaustive-deps": "off",

      // Trailing spaces
      "no-trailing-spaces": "error",
    },
  },
];
