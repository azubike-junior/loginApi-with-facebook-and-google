"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _migrate = _interopRequireDefault(require("./migrate"));

class Users {
  static async save(user) {
    const {
      first_name,
      last_name,
      email,
      password
    } = user;
    const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
    const params = [first_name, last_name, email, password];

    try {
      return await (0, _migrate.default)(sql, params);
    } catch (e) {
      throw e;
    }
  }

  static async findUser(email) {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const params = [email];

    try {
      return await (0, _migrate.default)(sql, params);
    } catch (e) {
      throw e;
    }
  }

  static async findUserById(id) {
    const sql = 'SELECT * FROM users WHERE user_id = $1';
    const params = [user_id];

    try {
      return await (0, _migrate.default)(sql, params);
    } catch (e) {
      throw e;
    }
  }

}

var _default = Users;
exports.default = _default;