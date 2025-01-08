const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 4000,
  },
  module: {
    rules: [
      {
          test: /\.html$/i,
          loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][hash][ext]',
        },
      },
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./news.html",
      filename: "news.html",
    }),
    new HtmlWebpackPlugin({
      template: "./news-detail.html",  
      filename: "news-detail.html",
    }),
    new HtmlWebpackPlugin({
      template: "./services.html",  
      filename: "services.html",
    }),
  ],
};
