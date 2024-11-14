"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../LCD/Lcd.css");
var Lcd = function (_a) {
    var currentInput = _a.currentInput;
    return react_1["default"].createElement("div", { className: "display" }, currentInput);
};
exports["default"] = Lcd;
