module.exports = {
  globals: {
    wx: true,
  },
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': [
      // 允许function的提升使用
      'error',
      { functions: false, classes: true },
    ],
    'import/no-anonymous-default-export': 0,
    'no-console': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-globals': ['error', 'event'], // 禁用的全局变量
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-tag-location': 2,
  },
};
