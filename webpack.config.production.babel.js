const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.config.base');

// PostCSS
const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');

const config = merge(baseConfig, {
  entry: './src/index',

  output: {
    publicPath: './dist/',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader:
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        }),
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: webpackInstance => [
          postcssImport({
            addDependencyTo: webpackInstance,
            path: ['./src'],
          }),
          cssnext({ browsers: ['last 2 versions', 'IE > 10'] }),
        ],
        context: __dirname,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ],
});

module.exports = config;
