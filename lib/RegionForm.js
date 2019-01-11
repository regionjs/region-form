"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _regionCore = require("region-core");

var _antd = require("antd");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RegionForm =
/*#__PURE__*/
function (_Region) {
  _inherits(RegionForm, _Region);

  function RegionForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RegionForm);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RegionForm)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleValueChange", function (key) {
      return function (value) {
        _this.set(key, value);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleEventValueChange", function (key) {
      return function (e) {
        _this.set(key, e.target.value);
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "Input", function (_ref) {
      var valueKey = _ref.valueKey,
          args = _objectWithoutProperties(_ref, ["valueKey"]);

      var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
          connectWith = _assertThisInitialize.connectWith,
          handleEventValueChange = _assertThisInitialize.handleEventValueChange;

      var passByArgs = (0, _lodash.omit)(args, ['value', 'onChange']); // TODO memorize with valueKey

      var Hoc = function Hoc(_ref2) {
        var value = _ref2[valueKey];
        return _react.default.createElement(_antd.Input, _extends({
          vaule: value,
          onChange: handleEventValueChange
        }, passByArgs));
      };

      return connectWith(valueKey, Hoc);
    });

    return _this;
  }

  return RegionForm;
}(_regionCore.Region);

exports.RegionForm = RegionForm;