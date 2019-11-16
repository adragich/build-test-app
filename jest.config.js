module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': 'buble-jest'
  },
  globals: {
    'vue-jest': {
      babelConfig: {
        presets: [
          [
            'env',
            {
              targets: {
                edge: '17',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
              },
              useBuiltIns: 'usage',
            },
          ]
        ],
        plugins: [
          'transform-object-rest-spread'
        ]
      }
    }
  },
};
