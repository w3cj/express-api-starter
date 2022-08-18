module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    camelcase: 0,
  },
};
