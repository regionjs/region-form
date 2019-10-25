"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antd_1 = require("./adapter/antd");
var withAdapter_1 = require("./withAdapter");
exports.RegionForm = withAdapter_1.default(antd_1.antdAdapter);
