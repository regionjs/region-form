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
var antd_2 = require("./adapter/antd");
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
var RegionForm = /** @class */ (function () {
    function RegionForm(option, ignoreWarning) {
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
        this.bindWith = function (key, Component, options) {
            if (options === void 0) { options = {}; }
            var validate = options.validate;
            var _a = _this, handlerFactory = _a.handlerFactory, defaultProps = _a.defaultProps, initialValues = _a.initialValues, labels = _a.labels;
            var _b = _this.region, set = _b.set, useProps = _b.useProps;
            var initialValue = initialValues[key];
            var label = labels[key];
            set(key, initialValue);
            var _c = antd_2.antdAdapter(Component), valueName = _c[0], handlerName = _c[1], selector = _c[2];
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
        if (!ignoreWarning) {
            console.warn('RegionForm is deprecated, use createAntdFormRegion instead.');
        }
        var _a = option.defaultProps, defaultProps = _a === void 0 ? {} : _a, _b = option.initialValues, initialValues = _b === void 0 ? {} : _b, _c = option.labels, labels = _c === void 0 ? {} : _c;
        this.defaultProps = defaultProps;
        this.initialValues = initialValues;
        this.labels = labels;
    }
    return RegionForm;
}());
exports.default = RegionForm;
