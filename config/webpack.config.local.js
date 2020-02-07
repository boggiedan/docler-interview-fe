const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // production || development || none
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "../build"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: path.join(__dirname, "../src/index.html") })
  ],
  devServer: {
    open: true,
    hot: true,
    port: 3000
  }
};
