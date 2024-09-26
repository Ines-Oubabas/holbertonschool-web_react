const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,  // Ensure this is available in Webpack 5
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: './dist',  // Serve files from the 'dist' directory
    hot: true,         // Enable Hot Module Replacement (HMR)
    open: true,        // Automatically open the browser
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',  // Ensure this file exists
    }),
  ],
  mode: 'development',
};

