const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
  module: {
    rules: [{ test: /\.[jt]sx?$/, exclude: /node_modules/, use: 'babel-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
  devServer: {
    static: { directory: path.resolve(__dirname, 'public') },
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
  },
  mode: 'development',
};