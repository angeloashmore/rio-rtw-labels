const WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./webpack.base.config.js').merge({
  debug: true,

  devtool: 'sourcemap',

  output: {
    pathinfo: true
  }
});
