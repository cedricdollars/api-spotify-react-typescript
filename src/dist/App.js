"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var app_1 = require("./components/App/app");
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(app_1["default"], null)));
}
exports["default"] = App;
