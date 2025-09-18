const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',                 // demandé
  entry: {
    header: path.resolve(__dirname, 'modules/header/header.js'),
    body:   path.resolve(__dirname, 'modules/body/body.js'),
    footer: path.resolve(__dirname, 'modules/footer/footer.js'),
  },
  output: {
    filename: '[name].bundle.js',      // demandé: name_of_the_file.bundle.js
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'inline-source-map',        // demandé (inline source mapping)
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    // split des dépendances (jquery/lodash) en chunks partagés
    splitChunks: { chunks: 'all' }
  },
  plugins: [
    new CleanWebpackPlugin(),          // clean public/ à chaque build
    new HtmlWebpackPlugin({
      title: 'task_3',
      inject: 'body'                   // injecte les bundles en <script> en bas
      // par défaut, il inclura header/body/footer + chunks partagés
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8564,                        // demandé
    open: true,
    hot: true
  }
};
