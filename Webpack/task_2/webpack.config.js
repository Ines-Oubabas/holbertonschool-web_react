const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'js/dashboard_main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
    // NE PAS mettre clean:true pour ne pas supprimer public/index.html
  },
  module: {
    rules: [
      // CSS -> injecté dans le bundle
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      // Images depuis le CSS (optimisées)
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'assets',
              esModule: false
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true, quality: 70 },
              optipng: { enabled: true },
              pngquant: { quality: [0.65, 0.8], speed: 4 },
              gifsicle: { interlaced: false },
              svgo: { plugins: [{ name: 'removeViewBox', active: false }] }
            }
          }
        ]
      }
    ]
  },
  // Pas de WARNING “asset size limit”
  performance: { hints: false }
};
