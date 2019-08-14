module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
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
    "no-useless-constructor": 2,
    "@typescript-eslint/no-useless-constructor": 2,
    complexity: ["error", 5],
    "max-lines": ["error", 150],
    "no-var": "error",
    "no-param-reassign": "error",
    "max-lines-per-function": ["error", 30],
    "max-params": ["error", 4],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/no-empty-interface": 0
  }
}
