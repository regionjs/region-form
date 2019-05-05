"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
var lodash_1 = require("lodash");
var formItemPropsList = ['colon', 'extra', 'hasFeedback', 'help', 'label', 'labelCol', 'required', 'validateStatus', 'wrapperCol'];
var getValidateStatus = function (_a) {
    var loading = _a.loading, error = _a.error, value = _a.value;
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
var wrapRegionForm = function (Region, adapter) {
    var RegionForm = /** @class */ (function (_super) {
        __extends(RegionForm, _super);
        function RegionForm(option) {
            if (option === void 0) { option = {}; }
            var _this = _super.call(this, option) || this;
            _this.handlerFactory = function (key, selector, validate) { return function (value) {
                var selectedValue = selector(value);
                _this.set(key, selectedValue);
                if (validate) {
                    _this.load(key, validate, { params: selectedValue });
                }
            }; };
            _this.bindWith = function (key, Component, _a) {
                var validate = (_a === void 0 ? {} : _a).validate;
                var _b = _this, set = _b.set, connectWith = _b.connectWith, handlerFactory = _b.handlerFactory, defaultProps = _b.defaultProps, initialValues = _b.initialValues, labels = _b.labels;
                var initialValue = initialValues[key];
                var label = labels[key];
                set(key, initialValue);
                var _c = adapter(Component), valueName = _c[0], handlerName = _c[1], selector = _c[2];
                var handler = handlerFactory(key, selector, validate || defaultProps.validate);
                // TODO use useProps
                var Hoc = function (_a) {
                    var _b;
                    var loading = _a.loading, error = _a.error, _c = key, value = _a[_c], props = __rest(_a, ["loading", "error", typeof _c === "symbol" ? _c : _c + ""]);
                    var validateStatus = getValidateStatus({ loading: loading, error: error, value: value });
                    var combinedProps = Object.assign({ label: label }, defaultProps, props);
                    var formItemProps = lodash_1.pick(combinedProps, formItemPropsList);
                    var passByArgs = lodash_1.omit(combinedProps, ['dispatch', 'validate', valueName, handlerName].concat(formItemPropsList));
                    var bindObj = (_b = {}, _b[valueName] = value, _b[handlerName] = handler, _b);
                    return (React.createElement(antd_1.Form.Item, __assign({ validateStatus: validateStatus, help: loading ? 'validating...' : error }, formItemProps),
                        React.createElement(Component, __assign({}, bindObj, passByArgs))));
                };
                return connectWith(key, Hoc);
            };
            var _a = option.defaultProps, defaultProps = _a === void 0 ? {} : _a, _b = option.initialValues, initialValues = _b === void 0 ? {} : _b, _c = option.labels, labels = _c === void 0 ? {} : _c;
            _this.defaultProps = defaultProps;
            _this.initialValues = initialValues;
            _this.labels = labels;
            return _this;
        }
        return RegionForm;
    }(Region));
    return RegionForm;
};
exports.default = wrapRegionForm;
