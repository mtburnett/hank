"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = function () {
  function Polygon() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    _classCallCheck(this, Polygon);

    this.width = width;
    this.height = height;
  }

  _createClass(Polygon, [{
    key: "setName",
    value: function setName(newName) {
      this.name = newName;
    }
  }, {
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return this.height * this.width;
    }
  }, {
    key: "setWidth",
    value: function setWidth(newWidth) {
      this.width = newWidth;
    }
  }, {
    key: "setHeight",
    value: function setHeight(newHeight) {
      this.height = newHeight;
    }
  }]);

  return Polygon;
}();

var Poloygon3d = function (_Polygon) {
  _inherits(Poloygon3d, _Polygon);

  function Poloygon3d() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Poloygon3d);

    var _this = _possibleConstructorReturn(this, (Poloygon3d.__proto__ || Object.getPrototypeOf(Poloygon3d)).call(this));

    _this.width = width;
    _this.height = height;
    _this.depth = depth;
    return _this;
  }

  _createClass(Poloygon3d, [{
    key: "setDepth",
    value: function setDepth(depth) {
      this.depth = depth;
    }
  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.width * this.height * this.depth;
    }
  }]);

  return Poloygon3d;
}(Polygon);

exports.default = Poloygon3d;