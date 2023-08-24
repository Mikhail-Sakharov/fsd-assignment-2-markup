const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'pug', 'ui-kit', 'index.pug'),
      minify: {
        useShortDoctype: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Colors & Type',
      filename: 'colors-and-type.html',
      template: path.resolve(__dirname, 'src', 'pug', 'ui-kit', 'colors-and-type.pug'),
      minify: {
        useShortDoctype: false
      }
    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
}
