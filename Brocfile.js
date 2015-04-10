'use strict';

var rework = require('./');
var colors = require('rework-plugin-colors');

module.exports = rework('test/fixtures', {
	use: function (css) {
		css.use(colors());
	}
});
