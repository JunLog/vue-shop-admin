module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/essential', '@vue/standard'],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'space-before-function-paren': 0,
    'no-console': 'off',
    'no-debugger': 'off'
  },

  extends: ['plugin:vue/essential', '@vue/standard']
}
