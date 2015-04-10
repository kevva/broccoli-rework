'use strict';

var fs = require('fs');
var path = require('path');
var rimraf = require('rimraf');
var test = require('ava');

test('transpile CSS', function (t) {
	t.plan(4);

	var css = 'body {\n  background: rgba(255, 255, 255, 1);\n}';
	var dest = path.join(__dirname, 'tmp/test.css');

	fs.readFile(dest, 'utf8', function (err, data) {
		t.assert(!err, err);
		t.assert(data === css);

		rimraf(path.join(__dirname, 'tmp'), function (err) {
			t.assert(!err, err);

			rimraf(path.join(__dirname, '../tmp'), function (err) {
				t.assert(!err, err);
			});
		});
	});
});
