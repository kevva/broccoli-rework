/*global afterEach, describe, it */
'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var rm = require('rimraf');

describe('broccoli-rework()', function () {
	afterEach(function (cb) {
		rm.sync(path.join(__dirname, 'tmp'));
		rm.sync(path.join(__dirname, '../tmp'));
		cb();
	});

	it('should process CSS', function (cb) {
		var css = 'body {\n  background: rgba(255, 255, 255, 1);\n}';
		cb(assert.strictEqual(fs.readFileSync(path.join(__dirname, 'tmp/test.css'), 'utf8'), css));
	});
});
