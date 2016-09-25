module.exports = {
  extends: [
    'eslint-config-auth0-base',
    'eslint-config-auth0-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y'
  ].map(require.resolve),
  rules: {}
};
