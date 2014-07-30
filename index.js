'use strict';

var assign = require('object-assign');
var Filter = require('broccoli-filter');
var Rework = require('rework');

/**
 * Initialize `ReworkFilter` with options
 *
 * @param {Object} inputTree
 * @param {Object} opts
 * @api public
 */

function ReworkFilter(inputTree, opts) {
    if (!(this instanceof ReworkFilter)) {
        return new ReworkFilter(inputTree, opts);
    }

    this.inputTree = inputTree;
    this.opts = opts || {};
}

/**
 * Create object
 */

ReworkFilter.prototype = Object.create(Filter.prototype);
ReworkFilter.prototype.constructor = ReworkFilter;

/**
 * Extensions
 */

ReworkFilter.prototype.extensions = ['css'];
ReworkFilter.prototype.targetExtension = 'css';

/**
 * Process CSS
 *
 * @param {String} str
 * @api public
 */

ReworkFilter.prototype.processString = function (str, relativePath) {
    var rework = new Rework(str, {
      source: relativePath
    });

    if (this.opts.use) {
        this.opts.use(rework);
    }

    return rework.toString(this.opts);
};

/**
 * Module exports
 */

module.exports = ReworkFilter;

/**
 * Mixin the rework built-in plugins
 */

delete Rework.properties;
assign(module.exports, Rework);
