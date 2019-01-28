"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antd = require("antd");

var adapter = function adapter(Component) {
  var selectEvent = function selectEvent(e) {
    return e.target.value;
  };

  var selectValue = function selectValue(value) {
    return value;
  };

  switch (Component) {
    case _antd.Input:
    case _antd.Input.TextArea:
    case _antd.Input.Search:
    case _antd.Input.Password:
    case _antd.Radio.Group:
      return ['value', 'onChange', selectEvent];

    case _antd.Checkbox.Group:
      return ['checked', 'onChange', selectValue];

    case _antd.Transfer:
      return ['targetKeys', 'onChange', selectValue];
    // case AutoComplete:
    // case Cascader:
    // case DatePicker:
    // case DatePicker.MonthPicker:
    // case DatePicker.RangePicker:
    // case DatePicker.WeekPicker:
    // case InputNumber:
    // case Mention:
    // case Rate:
    // case Switch:
    // case Slider:
    // case Select:
    // case TreeSelect:
    // case TimePicker:

    default:
      {
        return ['value', 'onChange', selectValue];
      }
  }
};

var _default = adapter;
exports.default = _default;