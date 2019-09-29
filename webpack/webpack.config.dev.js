'use strict'

const common = require('./webpack.config.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

console.log('[Webpack] Use dev configuration\n')

module.exports = Object.assign(
  {},
  {
    mode: 'development',

    devtool: '#source-map',

    devServer: {
      port: 3000, // Tell dev-server which port to run
      open: true, // to open the local server in browser
      contentBase: common.contentBase //serve from 'dist' folder
    },

    plugins: [
      // new BundleAnalyzerPlugin(),
      // new ExtractTextPlugin('./[name]'),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(common.CopyWebpackPlugin),
      new HtmlWebpackPlugin(common.HtmlWebpackPlugin)
    ]
  },
  common.main
)
