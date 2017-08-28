const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
  entry: {
    'app': './src/main.ts',
    'vendor': './src/vendor.ts'
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
});
