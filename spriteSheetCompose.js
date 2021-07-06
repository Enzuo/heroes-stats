#!/usr/bin/env node

const path = require('path')
const fs = require('fs')

var nsg = require('node-sprite-generator');
var myArgs = process.argv.slice(2);
var size = myArgs[0] || ''

nsg({
  src: [
    'public/tmp/*.png'
  ],
  spritePath: 'public/sprite/heroes'+size+'.png',
  stylesheet: 'css',
  stylesheetPath: 'src/css/heroes'+size+'.css',
  layout: 'packed'
}, function (err) {
  if(err) console.error(err)
  console.log('Sprite generated!');

  formatCssFile('src/css/heroes'+size+'.css')
  console.log('Css formated!');
});

function formatCssFile (file) {
  var cssFileContent = fs.readFileSync(file, 'utf-8')
  var cssFileUpdated = cssFileContent.replace(/_Hero_Portrait/g, '')
  cssFileUpdated = cssFileUpdated.replace(/(..\/..\/)/g, '')
  fs.writeFileSync(file, cssFileUpdated)
}

