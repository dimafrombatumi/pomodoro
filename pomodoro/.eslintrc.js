module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-native", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    node: true,
  },
  rules: {
    // Примеры правил
    "react-native/no-inline-styles": "off",
    "react/react-in-jsx-scope": "off", // не нужен для React 17+
    "@typescript-eslint/no-unused-vars": ["warn"],
    "react-native/no-color-literals": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
