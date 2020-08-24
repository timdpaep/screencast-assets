const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [path.resolve(__dirname, 'src/app.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            },
          },
        ]
      },
      {
        test: /\.png|svg|jpg|jpeg|gif$/,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader" ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
      port: process.env.PORT || 8080,
      contentBase: './src',
  }
}