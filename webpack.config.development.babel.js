import path from 'path';
import webpack from 'webpack';
import postcssImport from 'postcss-import';
import cssnext from 'postcss-cssnext';

const config = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './src/index',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.png|\.svg$/,
        loader: 'file-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:9000/dist/',
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.json'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: (webpackInstance) => [
          postcssImport({
            addDependencyTo: webpackInstance,
            path: ['./src'],
          }),
          cssnext({ browsers: ['last 2 versions', 'IE > 10'] }),
        ],
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
  target: 'electron-renderer',
};

module.exports = config;
