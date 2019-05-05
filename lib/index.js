"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var region_core_1 = require("region-core");
var antd_1 = require("./adapter/antd");
var wrapRegionForm_1 = require("./wrapRegionForm");
exports.RegionForm = wrapRegionForm_1.default(region_core_1.Region, antd_1.antdAdapter);
