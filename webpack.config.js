const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    header: "./src/scripts/header.js",
    footer: "./src/scripts/footer.js",
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
        use: [
          // "style-loader", 
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
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
    new HtmlWebpackPlugin({
      filename: "service-1.html",
      template: "./src/pages/service-1.html",
    }),
    new HtmlWebpackPlugin({
      filename: "service-2.html",
      template: "./src/pages/service-2.html",
    }),
    new HtmlWebpackPlugin({
      filename: "service-3.html",
      template: "./src/pages/service-3.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  optimization: {
    runtimeChunk: "single",
  },
};
