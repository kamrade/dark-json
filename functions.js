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

	return {
		fillValueStrict: fillValueStrict
	};

})();
