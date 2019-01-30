"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formItemPropsList = ['colon', 'extra', 'hasFeedback', 'help', 'label', 'labelCol', 'required', 'validateStatus', 'wrapperCol'];

var getValidateStatus = function getValidateStatus(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      value = _ref.value;

  if (value === null) {
    return null;
  }

  if (loading) {
    return 'validating';
  }

  if (error) {
    return 'error';
  }

  return 'success';
};

var wrapRegionForm = function wrapRegionForm(Region, adapter) {
  var RegionForm =
  /*#__PURE__*/
  function (_Region) {
    _inherits(RegionForm, _Region);

    function RegionForm() {
      var _this;

      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, RegionForm);

      var combinedOption = option;

      if (typeof option === 'string') {
        combinedOption = {
          name: option
        };
      }

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RegionForm).call(this, Object.assign({
        name: 'bindForm'
      }, combinedOption)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlerFactory", function (key, selector, validate) {
        return function (value) {
          var selectedValue = selector(value);

          _this.set(key, selectedValue);

          if (validate) {
            _this.load(key, validate, {
              params: selectedValue
            });
          }
        };
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bindWith", function (key, Component) {
        var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            validate = _ref2.validate;

        var _assertThisInitialize = _assertThisInitialized(_assertThisInitialized(_this)),
            set = _assertThisInitialize.set,
            connectWith = _assertThisInitialize.connectWith,
            handlerFactory = _assertThisInitialize.handlerFactory,
            defaultProps = _assertThisInitialize.defaultProps,
            initialValues = _assertThisInitialize.initialValues,
            labels = _assertThisInitialize.labels;

        var initialValue = initialValues[key];
        var label = labels[key];
        set(key, initialValue);

        var _adapter = adapter(Component),
            _adapter2 = _slicedToArray(_adapter, 3),
            valueName = _adapter2[0],
            handlerName = _adapter2[1],
            selector = _adapter2[2];

        var handler = handlerFactory(key, selector, validate || defaultProps.validate);

        var Hoc = function Hoc(_ref3) {
          var _bindObj;

          var loading = _ref3.loading,
              error = _ref3.error,
              value = _ref3[key],
              props = _objectWithoutProperties(_ref3, ["loading", "error", key].map(_toPropertyKey));

          var validateStatus = getValidateStatus({
            loading: loading,
            error: error,
            value: value
          });
          var combinedProps = Object.assign({
            label: label
          }, defaultProps, props);
          var formItemProps = (0, _lodash.pick)(combinedProps, formItemPropsList);
          var passByArgs = (0, _lodash.omit)(combinedProps, ['dispatch', 'validate', valueName, handlerName].concat(formItemPropsList));
          var bindObj = (_bindObj = {}, _defineProperty(_bindObj, valueName, value), _defineProperty(_bindObj, handlerName, handler), _bindObj);
          return _react.default.createElement(_antd.Form.Item, _extends({
            validateStatus: validateStatus,
            help: loading ? 'validating...' : error
          }, formItemProps), _react.default.createElement(Component, _extends({}, bindObj, passByArgs)));
        };

        return connectWith(key, Hoc);
      });

      var _combinedOption = combinedOption,
          _combinedOption$defau = _combinedOption.defaultProps,
          _defaultProps = _combinedOption$defau === void 0 ? {} : _combinedOption$defau,
          _combinedOption$initi = _combinedOption.initialValues,
          _initialValues = _combinedOption$initi === void 0 ? {} : _combinedOption$initi,
          _combinedOption$label = _combinedOption.labels,
          _labels = _combinedOption$label === void 0 ? {} : _combinedOption$label;

      _this.defaultProps = _defaultProps;
      _this.initialValues = _initialValues;
      _this.labels = _labels;
      return _this;
    }

    return RegionForm;
  }(Region);

  return RegionForm;
};

var _default = wrapRegionForm;
exports.default = _default;