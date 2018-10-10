// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": "off",
    "no-console": "off",
    /*
    "indent": [
      "error",
      2,
      {
        "MemberExpression": 0,
        "SwitchCase": 1
      }
    ],"no-var": [
      "error"
    ],
    "one-var": [
      "error",
      {
        "initialized": "never"
      }
    ],
    "one-var-declaration-per-line": "off",*/
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    /*"no-unused-vars": [
      "error",
      {
        "args": "none"
      }
    ],*/
    "no-multi-spaces": [
      "error"
    ],
    "key-spacing": [
      "error",
      {"beforeColon": false, "afterColon": true}
    ],
    "keyword-spacing": [
      "error"
    ],
    "func-names": [
      "error",
      "never"
    ],
    /*"space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "never"
      }
    ],*/
    "comma-spacing": [
      "error",
      {"before": false, "after": true}
    ],
    "arrow-body-style": [
      "error",
      "as-needed"
    ],
    "space-infix-ops": [
      "error",
      {"int32Hint": false}
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    /*"object-curly-spacing": [
      "error",
      "always"
    ],*/
    "object-curly-spacing": [0],
    "arrow-spacing": ["error", {before: true, after: true}],
    // "semi": ['error', 'always'],
    "semi": [0],
    "no-undef": [0],
    "new-cap": [0],
    "no-unused-vars": [0],
    "space-before-function-paren": [0],
    "radix": "off",
    "no-underscore-dangle": "off",
    "consistent-return": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "global-require": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": "off",
    "comma-dangle": ["error", "never"],
    "no-await-in-loop": "off",
    "quotes": [1, "single"],//引号类型 `` "" ''
    "quote-props": [0],//对象字面量中的属性名是否强制双引号

    "no-new": [0],

    "wrap-iife": [0],
    "spaced-comment": [0],

    "prefer-template":2,
    "eqeqeq":2,
  }
};
