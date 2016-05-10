const webpack = require('webpack')
const WebpackConfig = require('webpack-config')

module.exports = new WebpackConfig().extend('./webpack.base.config.js').merge({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    })
  ]
})
