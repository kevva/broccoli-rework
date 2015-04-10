# broccoli-rework [![Build Status](http://img.shields.io/travis/kevva/broccoli-rework.svg?style=flat)](https://travis-ci.org/kevva/broccoli-rework)

> Preprocess CSS with [Rework](https://github.com/reworkcss/rework)


## Install

```
$ npm install --save-dev broccoli-rework
```


## Usage

```js
var rework = require('broccoli-rework');
var colors = require('rework-plugin-colors');

tree = rework(tree, {use: function (css) {
	css.use(colors());
}});
```


## API

### rework(tree, options)

Initialize a new rework with the given string of regular CSS. Optionally supply
an object with options as the last argument.


#### options.use(css)

Type: `function`

Accepts a function that gives you the ability to interact with rework before
compiling. Useful for adding on plugins, etc.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
