module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  plugins: ["babel"],
  rules: {
    indent: ["warn", 2],
    "prettier/prettier": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "prefer-destructuring": "off",
    "prefer-template": "off",
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "no-console": "off",
  },
};
