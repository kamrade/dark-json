console.log('\x1b[33m%s\x1b[0m ', '\n +++ start operation +++ \n');
var opt = require('./dark-opt');
var h = require('./helpers');
var fs = require('fs');

var fillValue = function(optMin, optMax) {
	var result = {};
	var levelKeys = Object.keys(optMin);
	for (var i = 0, l = levelKeys.length; i < l; i++) {
		if ( typeof optMin[levelKeys[i]] === 'object' ) {
			result[levelKeys[i]] = fillValue(optMin[levelKeys[i]], optMax[levelKeys[i]]);
		} else {
			result[levelKeys[i]] = h.randomInteger(optMin[levelKeys[i]], optMax[levelKeys[i]]);
		}
	}
	return result;
};

outArr = [];
for (var i = 0, l = opt.itemsCount; i < l; i++) {
	outArr[i] = fillValue(opt.min, opt.max);
	outArr[i].index = i;
}
fs.writeFileSync('./data/dark-data.json', JSON.stringify(outArr));
