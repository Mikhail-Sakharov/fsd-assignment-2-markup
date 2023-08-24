const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: []
  },
  plugins: []
}
