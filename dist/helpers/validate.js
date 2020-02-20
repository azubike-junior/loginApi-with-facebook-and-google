"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLogin = exports.validateSignup = void 0;

var _expressValidator = require("express-validator");

const validateSignup = [(0, _expressValidator.check)('first_name').isLength({
  min: 1
}).trim().escape().withMessage('firstname field is required'), (0, _expressValidator.check)('last_name').isLength({
  min: 1
}).trim().escape().withMessage('lastname field is required'), (0, _expressValidator.check)('email').isEmail().isLength({
  min: 1
}).trim().escape().withMessage('email field is required'), (0, _expressValidator.check)('password').isLength({
  min: 7
}).trim().withMessage('password must be more than 7 characters'), (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()
    });
  }

  return next();
}];
exports.validateSignup = validateSignup;
const validateLogin = [(0, _expressValidator.check)('email').isEmail().isLength({
  min: 1
}).trim().escape().withMessage('email field is required'), (0, _expressValidator.check)('password').isLength({
  min: 7
}).trim().withMessage('password must be more than 7 characters'), (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()
    });
  }

  return next();
}];
exports.validateLogin = validateLogin;