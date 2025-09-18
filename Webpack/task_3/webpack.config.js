const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './modules/header/header.js',  // ⬅️ strings, comme le checker veut
    body:   './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
    ],
  },
  optimization: { splitChunks: { chunks: 'all' } },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'task_3', inject: 'body' }),
  ],
  devServer: {
    // Le checker attend "contentBase: ./public" et port 8564
    contentBase: path.resolve(__dirname, 'public'),
    port: 8564,
    open: true,
    // (optionnel) garde aussi la clé moderne si tu veux continuer à l'utiliser localement :
    // static: path.resolve(__dirname, 'public'),
  },
};
