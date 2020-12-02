module.exports = {
  root: true,
  env: {
    mocha: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["babel"],
  rules: {
    indent: ["warn", 2],
    "prettier/prettier": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "prefer-destructuring": "off",
    "prefer-template": "off",
    "no-console": "off",
    "func-names": "off",
  },
};
