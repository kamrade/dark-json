console.log('\x1b[33m%s\x1b[0m ', '\n +++ start operation +++ \n');
var opt = require('./dark-opt');
var h = require('./helpers');
var fs = require('fs');
var f = require('./functions');

outArr = [];
for (var i = 0, l = opt.itemsCount; i < l; i++) {
	outArr[i] = f.fillValueStrict(opt.min, opt.max);
	outArr[i].index = i;
}
fs.writeFileSync('./data/dark-data.json', JSON.stringify(outArr, null, 4));
