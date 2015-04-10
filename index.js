'use strict';

var objectAssign = require('object-assign');
var Filter = require('broccoli-filter');
var Rework = require('rework');

function ReworkFilter(inputTree, opts) {
	if (!(this instanceof ReworkFilter)) {
		return new ReworkFilter(inputTree, opts);
	}

	this.inputTree = inputTree;
	this.opts = opts || {};
}

ReworkFilter.prototype = Object.create(Filter.prototype);
ReworkFilter.prototype.constructor = ReworkFilter;
ReworkFilter.prototype.extensions = ['css'];
ReworkFilter.prototype.targetExtension = 'css';

ReworkFilter.prototype.processString = function (str, relativePath) {
	var rework = new Rework(str, {
		source: relativePath
	});

	if (this.opts.use) {
		this.opts.use(rework);
	}

	return rework.toString(this.opts);
};

module.exports = ReworkFilter;
delete Rework.properties;
objectAssign(module.exports, Rework);
