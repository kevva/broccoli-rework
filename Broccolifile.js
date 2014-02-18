'use strict';

var rework = require('./');

module.exports = function (broccoli) {
    return rework(broccoli.makeTree('test/fixtures'), { use: function (css) {
        css.use(rework.colors());
    }});
};
