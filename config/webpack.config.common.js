const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../public/js"),
    publicPath: "/js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        type: 'javascript/auto',
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
