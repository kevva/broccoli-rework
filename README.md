# broccoli-rework [![Build Status](https://travis-ci.org/kevva/broccoli-rework.png?branch=master)](http://travis-ci.org/kevva/broccoli-rework)

Preprocess CSS with [Rework](https://github.com/reworkcss/rework).

## Getting started

Install with [npm](https://npmjs.org/package/broccoli-rework): `npm install --save broccoli-rework`

## Examples

```js
var rework = require('broccoli-rework');
tree = rework(tree, { use: function (css) { 
    css.use(rework.colors()); 
}});
```

## API

### rework(tree, opts)

Initialize a new rework with the given string of regular CSS. Optionally supply 
an object with options as the last argument.

## Options

### use

Type: `Boolean`  
Default: `undefined`

Accepts a function that gives you the ability to interact with rework before 
compiling. Useful for adding on plugins, etc.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](https://github.com/kevva)
