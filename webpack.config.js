const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const fs = require("fs");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PUG_FILE_REG_EXP = /.+(?=.pug)/;

const uiKitPagesDir = path.resolve(__dirname, 'src', 'pug', 'ui-kit');
const pagesDir = path.resolve(__dirname, 'src', 'pug', 'pages');

const UI_KIT_PAGES = fs.readdirSync(uiKitPagesDir)
  .filter((file) => PUG_FILE_REG_EXP.test(file))
  .map((file) => file.match(PUG_FILE_REG_EXP)[0]);

const PAGES = fs.readdirSync(pagesDir);

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src', 'js', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env'
                ]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.jpg$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    ...UI_KIT_PAGES.map((page) => new HtmlWebpackPlugin({
      title: page === 'index' ? 'UI-kit' : page,
      favicon: 'src/img/favicon-32x32.png',
      filename: `${page}.html`,
      template: path.resolve(__dirname, 'src', 'pug', 'ui-kit', `${page}.pug`),
      minify: {
        useShortDoctype: false
      }
    })),
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      title: page,
      favicon: 'src/img/favicon-32x32.png',
      filename: `${page}.html`,
      template: path.resolve(__dirname, 'src', 'pug', 'pages', `${page}`, `${page}.pug`),
      minify: {
        useShortDoctype: false
      }
    })),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'src/fonts', to: 'fonts'}
      ],
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
