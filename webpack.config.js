const WebpackConfig = require('webpack-config')

WebpackConfig.environment.setAll({
  env: function () {
    return process.env.WEBPACK_ENV || process.env.NODE_ENV
  }
})

module.exports = new WebpackConfig().extend('./webpack.[env].config.js')
