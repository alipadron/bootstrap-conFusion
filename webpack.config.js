const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "docs/assets/js")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/styles.css"
    })
  ],
  module: {
    rules: [
      // Loader for css files
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      // Loader for the image files
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: 'file-loader?name=../img/[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader?name=../fonts/[name].[ext]'
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader?name=../fonts/[name].[ext]'
      }
    ]
  },
  mode: "production"
};
