module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-strongly-recommended", "eslint:recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 1,
        },
      },
    ],
  },
};
