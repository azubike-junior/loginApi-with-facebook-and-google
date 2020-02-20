"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = void 0;

const handleError = (message, statusCode = null, next) => {
  const error = new Error();
  error.message = message;
  error.statusCode = statusCode;
  return next(error);
};

exports.handleError = handleError;