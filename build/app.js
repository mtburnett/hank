'use strict';

var _polygon = require('./polygon');

var _polygon2 = _interopRequireDefault(_polygon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myCube = new _polygon2.default(4, 4, 4);

myCube.setName('Hank the cube');

console.log(myCube.getName() + '\'s volume is ' + myCube.getVolume() + '.');