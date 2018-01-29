const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.config.base');

const config = merge(baseConfig, {
  entry: './src/index',

  output: {
    publicPath: './dist/',
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin(),
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});

module.exports = config;
