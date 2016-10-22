var h = require('./helpers');

module.exports = (function(){

	var fillValueStrict = function(optMin, optMax) {
		var result = {};
		var levelKeys = Object.keys(optMin);
		for (var i = 0, l = levelKeys.length; i < l; i++) {
			if ( typeof optMin[levelKeys[i]] === 'object' ) {
				result[levelKeys[i]] = fillValueStrict(optMin[levelKeys[i]], optMax[levelKeys[i]]);
			} else {
				result[levelKeys[i]] = h.randomInteger(optMin[levelKeys[i]], optMax[levelKeys[i]]);
			}
		}
		return result;
	};

	var fillValueLazy = function(optMin, optMax) {
		var result = {};
		var levelKeys = Object.keys(optMin);
		for (var i = 0, l = levelKeys.length; i < l; i++) {
			if ( typeof optMin[levelKeys[i]] === 'object' ) {
				result[levelKeys[i]] = fillValueLazy(optMin[levelKeys[i]], optMax[levelKeys[i]]);
			} else {
				if ( h.randomInteger(0, 5) == 1 ) {
					result[levelKeys[i]] = h.randomInteger(optMin[levelKeys[i]], optMax[levelKeys[i]]);
				} else {
					console.log('\x1b[31m%s\x1b[0m', 'skip');
				}
			}
		}
		return result;
	};

	return {
		fillValueStrict : fillValueStrict,
		fillValueLazy : fillValueLazy
	};

})();
