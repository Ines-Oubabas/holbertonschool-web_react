const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './js/main.ts',
    output: {
      filename: '[name].bundle.js', // Ensure unique filenames
      path: path.resolve(__dirname, 'dist'),
      clean: true, // Ensures dist is cleaned before each build
    },
    devtool: isProduction ? false : 'inline-source-map',
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
      static: './dist',
    },
    optimization: {
      splitChunks: {
        chunks: 'all', // Code splitting for performance
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: isProduction ? 'My Production App' : 'My Development App',
        template: 'index.html',
      }),
    ],
  };
};
