"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("antd");
var selectEvent = function (e) { return e.target.value; };
var selectValue = function (value) { return value; };
exports.antdAdapter = function (Component) {
    switch (Component) {
        case antd_1.Input:
        case antd_1.Input.TextArea:
        case antd_1.Input.Search:
        case antd_1.Input.Password:
        case antd_1.Radio.Group:
            return ['value', 'onChange', selectEvent];
        case antd_1.Transfer:
            return ['targetKeys', 'onChange', selectValue];
        // case AutoComplete:
        // case Checkbox.Group:
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
        default: {
            return ['value', 'onChange', selectValue];
        }
    }
};
