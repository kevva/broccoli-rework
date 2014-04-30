'use strict';

var rework = require('./');

module.exports = rework('test/fixtures', { use: function (css) {
    css.use(rework.colors());
}});
