const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: "development",  // Mode développement
  entry: {
    main: "./js/main.ts",  // Point d'entrée principal
  },
  devtool: "inline-source-map",  // Source maps pour le débogage
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Gestion des fichiers TypeScript
        loader: 'ts-loader',
        options: {
          transpileOnly: true  // Ne transpile que le code sans vérification complète
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]  // Résolution des extensions pour les imports
  },
  devServer: {
    static: "./dist",  // Dossier de contenu statique
    open: true,  // Ouvre le navigateur automatiquement
  },
  optimization: {
    splitChunks: {
      chunks: 'all',  // Active la découpe du code pour tous les chunks
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),  // Vérifie les erreurs TypeScript
    new CleanWebpackPlugin(),  // Nettoie le dossier dist à chaque build
    new HtmlWebpackPlugin({
      title: "Development",  // Titre de la page générée
    })
  ],
  output: {
    filename: "[name].bundle.js",  // Utilisation de [name] pour différencier les chunks
    path: path.resolve(__dirname, "dist"),  // Dossier de sortie
    clean: true,  // Nettoie automatiquement les anciens fichiers de sortie
  },
  performance: {
    hints: false,  // Désactive les avertissements de performance
  }
};
