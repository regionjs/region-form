"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var antd_1 = require("antd");
var lodash_1 = require("lodash");
var region_core_1 = require("region-core");
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
var withAdapter = function (adapter) {
    var RegionForm = /** @class */ (function () {
        function RegionForm(option) {
            var _this = this;
            if (option === void 0) { option = {}; }
            this.region = region_core_1.createCombinedRegion();
            this.handlerFactory = function (key, selector, validate) { return function (value) {
                var selectedValue = selector(value);
                _this.region.set(key, selectedValue);
                if (validate) {
                    _this.region.load(key, validate, { params: selectedValue });
                }
            }; };
            this.bindWith = function (key, Component, _a) {
                var validate = (_a === void 0 ? {} : _a).validate;
                var _b = _this, handlerFactory = _b.handlerFactory, defaultProps = _b.defaultProps, initialValues = _b.initialValues, labels = _b.labels;
                var _c = _this.region, set = _c.set, useProps = _c.useProps;
                var initialValue = initialValues[key];
                var label = labels[key];
                set(key, initialValue);
                var _d = adapter(Component), valueName = _d[0], handlerName = _d[1], selector = _d[2];
                var handler = handlerFactory(key, selector, validate || defaultProps.validate);
                var ComponentOut = function (props) {
                    var _a;
                    var _b = useProps(key), loading = _b.loading, error = _b.error, _c = key, value = _b[_c];
                    var validateStatus = getValidateStatus({ loading: loading, error: error, value: value });
                    var combinedProps = Object.assign({ label: label }, defaultProps, props);
                    var formItemProps = lodash_1.pick(combinedProps, formItemPropsList);
                    var passByArgs = lodash_1.omit(combinedProps, ['dispatch', 'validate', valueName, handlerName].concat(formItemPropsList));
                    var bindObj = (_a = {}, _a[valueName] = value, _a[handlerName] = handler, _a);
                    return (React.createElement(antd_1.Form.Item, __assign({ validateStatus: validateStatus, help: loading ? 'validating...' : error }, formItemProps),
                        React.createElement(Component, __assign({}, bindObj, passByArgs))));
                };
                ComponentOut.displayName = "bindWith(" + key + ", " + (Component.displayName || Component.name) + ")";
                return ComponentOut;
            };
            var _a = option.defaultProps, defaultProps = _a === void 0 ? {} : _a, _b = option.initialValues, initialValues = _b === void 0 ? {} : _b, _c = option.labels, labels = _c === void 0 ? {} : _c;
            this.defaultProps = defaultProps;
            this.initialValues = initialValues;
            this.labels = labels;
        }
        return RegionForm;
    }());
    return RegionForm;
};
exports.default = withAdapter;
