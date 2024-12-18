module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  globals: {
    JSX: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['/src/assets/**', '/src/styles/**'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
  },
};
