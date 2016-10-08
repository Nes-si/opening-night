const path = require('path');
const express = require('express');
const webpack = require('webpack');
const opn = require('opn');
const proxyMiddleware = require('http-proxy-middleware');

const webpackConfig = require('./webpack.dev.conf');


let port = process.env.PORT || 8080;

let app = express();
let compiler = webpack(webpackConfig);

let devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});

let hotMiddleware = require('webpack-hot-middleware')(compiler);
// force page reload when html-webpack-plugin template changes
/*
compiler.plugin('compilation', compilation => {
  compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
    hotMiddleware.publish({action: 'reload'});
    cb();
  })
});
*/

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
let staticPath = path.posix.join('/', 'static');
app.use(staticPath, express.static('./static'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

module.exports = app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  let uri = 'http://localhost:' + port;
  console.log('Listening at ' + uri + '\n');
  opn(uri);
});
