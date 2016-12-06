'use strict';

var _cube = require('./cube');

var _cube2 = _interopRequireDefault(_cube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myCube = new _cube2.default(4, 4, 4);

myCube.setName('Hank the cube');

console.log(myCube.getName() + '\'s volume is ' + myCube.getVolume() + '.');