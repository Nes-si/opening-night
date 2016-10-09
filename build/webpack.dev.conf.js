const webpack = require('webpack');
const merge = require('webpack-merge');

const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');


process.env.NODE_ENV = 'development';

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(name => {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({sourceMap: false})
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
});
