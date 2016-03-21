var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

var buildDir = "rio-rtw-labels.safariextension";

module.exports = {
  debug: true,

  devtool: "sourcemap",

  entry: {
    end: "./src/end/index.js",
    global: "./src/global/index.js",
  },

  output: {
    path: buildDir,
    filename: "[name].js"
  },

  resolve: {
    modulesDirectories: ["node_modules", "./src"],
    extensions: ["", ".js"]
  },

  module: {
    loaders: [
      {
        test: /dymo/,
        loader: "legacy",
        query: {
          export: "dymo"
        }
      },
      {
        test: /\.js?$/,
        loader: "babel",
        exclude: [/node_modules/, /dymo/],
        query: {
          presets: ["es2015", "stage-0"]
        }
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([buildDir]),
    new CopyWebpackPlugin([
      { from: "src/Info.plist" },
      { from: "src/Settings.plist" },
      { from: "src/assets", to: "assets" }
    ]),
    new HtmlWebpackPlugin({
      title: "Rio RTW Labels",
      filename: "global.html",
      chunks: ["global"]
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
