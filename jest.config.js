module.exports = {
  // A map from regular expressions to paths to transformers
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': 'buble-jest'
  },
};
