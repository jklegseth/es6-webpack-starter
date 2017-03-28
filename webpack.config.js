'use strict';

module.exports = {
  entry: './src/main.js',

  devtool: 'source-map',

  output: {
    filename: './dist/bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};
