const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devServer: {
    static: "./dist",
    host: "0.0.0.0",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
        filename: "contact.html",
        template: "./src/pages/contact.html",
    }),
    new HtmlWebpackPlugin({
        filename: "about.html",
        template: "./src/pages/about.html",
    }),
    new HtmlWebpackPlugin({
        filename: "services.html",
        template: "./src/pages/services.html",
    }),
    new HtmlWebpackPlugin({
        filename: "equipment.html",
        template: "./src/pages/equipment.html",
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      template: "./src/pages/blog.html",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
