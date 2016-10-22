console.log('\x1b[33m%s\x1b[0m ', '\n +++ start operation +++ \n');
var opt = require('./dark-opt');
var h = require('./helpers');
var fs = require('fs');
var f = require('./functions');

outArr = [];
for (var i = 0, l = opt.itemsCount; i < l; i++) {
	// lazy mode
	if(h.randomInteger(0,1) == 1){
		outArr.push(f.fillValueLazy(opt.min, opt.max));
		outArr[outArr.length - 1].index = i;
	} else {
		console.log('\x1b[36m%s\x1b[0m', 'skip');
	}

}
fs.writeFileSync('./data/dark-data.json', JSON.stringify(outArr, null, 4));
