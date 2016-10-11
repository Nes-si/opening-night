const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const utils = require('./utils');
const projectRoot = path.resolve(__dirname, '../');


module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    modulesDirectories: ['src', 'node_modules'],
    alias: {
      'vue': 'vue/dist/vue',
      "TweenLite": "gsap/src/uncompressed/TweenLite"
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
          name: 'assets/images/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 100,
          name: 'assets/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      inject: true,
      filename: 'index.html'
    })
  ],
  postcss: () => [
    require('autoprefixer')(),
    require('postcss-import')(),
    require('postcss-normalize')(),
    require('precss')
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
