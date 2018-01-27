const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const config = merge(baseConfig, {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './src/index',
  ],

  output: {
    publicPath: 'http://localhost:9000/dist/',
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
      },
      debug: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = config;
