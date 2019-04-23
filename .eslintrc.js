module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //强制使用单引号
    quotes: ['error', 'single'],
    //强制使用分号结尾
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
