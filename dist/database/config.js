"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv.default.config();

const {
  DATA_BASE,
  DATABASE_URL,
  DEV_SECRET,
  PROD_SECRET
} = process.env;
const Development = {
  connectionString: DATA_BASE,
  jwt_secret: DEV_SECRET
};
const production = {
  connectionString: DATABASE_URL,
  jwt_secret: PROD_SECRET
};

const hero = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return production;

    default:
      return Development;
  }
};

const pool = new _pg.Pool(hero());
var _default = pool;
exports.default = _default;