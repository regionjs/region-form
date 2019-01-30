"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getProvider", {
  enumerable: true,
  get: function get() {
    return _regionCore.getProvider;
  }
});
exports.RegionForm = void 0;

var _regionCore = require("region-core");

var _antd = _interopRequireDefault(require("./adapter/antd"));

var _wrapRegionForm = _interopRequireDefault(require("./wrapRegionForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RegionForm = (0, _wrapRegionForm.default)(_regionCore.Region, _antd.default);
exports.RegionForm = RegionForm;