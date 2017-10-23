var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../backend/public/'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    { test: /\.css$/,
      loader: "style-loader!css-loader"
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};
