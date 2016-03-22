const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const buildDir = "rio-rtw-labels.safariextension";

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
        test: /dymo\.js$/,
        loader: "legacy",
        query: {
          export: "dymo"
        }
      },
      {
        test: /\.js?$/,
        loader: "babel",
        exclude: [/node_modules/, /dymo\.js$/],
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
    ]),
    new HtmlWebpackPlugin({
      title: "Rio RTW Labels",
      filename: "global.html",
      chunks: ["global"]
    })
  ]
};
