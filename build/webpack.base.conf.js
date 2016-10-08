const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const utils = require('./utils');
const projectRoot = path.resolve(__dirname, '../');


module.exports = {
  entry: {
    index: './src/index.js'
    //profile: './src/profile.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    modulesDirectories: ['src', 'node_modules', 'static'],
    alias: {
      'vue': 'vue/dist/vue'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  vue: {
    loaders: utils.cssLoaders(),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  }
};

Object.keys(module.exports.entry).forEach(page => {
  if (page !== 'vendors') {
    module.exports.plugins.push(new HtmlWebpackPlugin({
      filename: page + '.html',
      template: 'src/pages/' + page + '.pug'
    }) );
  }
});
