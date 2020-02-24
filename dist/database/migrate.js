"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(require("./config"));

const getResponseFromDb = async (sql, params = []) => {
  try {
    const client = await _config.default.connect();
    const result = await client.query(sql, params);
    return result.rows;
  } catch (e) {
    console.log(e);
  }
};

var _default = getResponseFromDb;
exports.default = _default;