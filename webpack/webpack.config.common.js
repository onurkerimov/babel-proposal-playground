'use strict'

const path = require('path')
const contentBase = path.resolve('./dist')

module.exports = {
  main: {
    entry: {
      'js/main.js': path.resolve('./src/js/index.js')
    },

    output: {
      filename: '[name]',
      path: contentBase
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    }
  },

  HtmlWebpackPlugin: {
    template: './src/markup/index.html',
    inject: false
  },

  CopyWebpackPlugin: [{ from: 'src/copy', to: '' }],

  contentBase: contentBase
}
