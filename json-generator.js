var fs = require('fs');
var h = require('./helpers');
var opt = require('./options')

console.log('json generator start');

var outputJson = [];
for (var i = 0, l = opt.itemsCount; i < l; i++) {
	var tempObject = {};
	for (var j = 0, m = opt.fields.length; j < m; j++) {
		tempObject[opt.fields[j]] = h.randomInteger(opt.min[j], opt.max[j]);
	}
	tempObject.itemIndex = i;
	outputJson.push(tempObject);
}

// console.log(outputJson);
// fs.writeFileSync('./data/data.json', JSON.stringify(outputJson));

var today = new Date(1982, 05, 11);
today.setDate(today.getDate() + 23);
console.log(today);
