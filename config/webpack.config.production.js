const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "./images",
              outputPath: "./../images"
            },
          },
        ],
      }
    ]
  }
});
