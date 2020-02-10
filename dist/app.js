"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
var PORT = 3000;
app.listen(PORT, function () {
  return console.log("server running on port ".concat(PORT));
});