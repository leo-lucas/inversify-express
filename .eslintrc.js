module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true
  },
  "extends": [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/standard"
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier",
    "standard"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-parameter-properties": 0,
    complexity: ["error", 5],
    "max-lines": ["error", 150],
    "no-var": "error",
    "no-param-reassign": "error",
    "max-lines-per-function": ["error", 40],
    "max-params": ["error", 4],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-interface": 0
  }
}
