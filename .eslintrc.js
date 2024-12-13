module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "next/core-web-vitals",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", { semi: true }],
    "@typescript-eslint/explicit-module-boundary-types": "off", // if needed
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
