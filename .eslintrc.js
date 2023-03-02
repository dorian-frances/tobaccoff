module.exports = {
  extends: ['@react-native-community', 'eslint-config-prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
