require('shelljs/global');
const path = require('path');
const ora = require('ora');
var replace = require("replace");

const webpackConfig = require('./webpack.prod.conf');


let spinner = ora('cleaning production build');
spinner.start();

let oldPath = path.resolve(__dirname)
let destPath = path.resolve(__dirname, '../dist');

replace({
  regex: `<script type="text/javascript" id="www-widgetapi-script" src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflFoWyC7/www-widgetapi.js" async=""></script>`,
  replacement: "",
  paths: [destPath+'/index.html']
});

replace({
  regex: `<script type="text/javascript" charset="utf8" async="" src="https://www.youtube.com/iframe_api"></script>`,
  replacement: "",
  paths: [destPath+'/index.html']
});

replace({
  regex: `id="app" class="">`,
  replacement: `id="app" class="loading">`,
  paths: [destPath+'/index.html']
});

cd(destPath);

rm('-rf', '.git');
exec('git init .');
exec("git add -A");
exec("git commit -m 'updated static views'");
exec("git remote add origin git@github.com:opening-night/opening-night.github.io.git");
exec("git push -f --set-upstream origin master");

cd(oldPath);



spinner.stop();
