const merge = require("webpack-merge");
const commonConfig = require("./webpack.config.common.js");
const path = require("path");

module.exports = merge(commonConfig, {
  watch: true,
  mode: "development",
  devtool: "source-map",
  devServer: {
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, "../public"),
    watchContentBase: true,
    open: "Chrome",
    openPage: "index.html",
    port: 18080
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
});
