"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegionForm_1 = require("./RegionForm");
exports.RegionForm = RegionForm_1.default;
var createAntdFormRegion = function (options) {
    return new RegionForm_1.default(options, true);
};
exports.createAntdFormRegion = createAntdFormRegion;
