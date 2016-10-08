const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


exports.cssLoaders = options => {
  options = options || {};
  // generate loader string to be used with extract text plugin
  let generateLoaders = loaders => {
    let sourceLoader = loaders.map(loader => {
      let extraParamChar = /\?/.test(loader) ? '&' : '?';
      return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
    }).join('!');

    if (options.extract)
      return ExtractTextPlugin.extract('vue-style', sourceLoader);
    else
      return ['vue-style', sourceLoader].join('!');
  };

  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass'])
  };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = options => {
  let output = [];
  let loaders = exports.cssLoaders(options);
  for (let extension in loaders) {
    let loader = loaders[extension];
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output;
};
