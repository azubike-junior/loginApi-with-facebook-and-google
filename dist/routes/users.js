"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _authUser = require("../controllers/authUser");

var _validate = require("../helpers/validate");

var _passport = _interopRequireDefault(require("passport"));

const router = _express.default.Router();

router.get('/send', (req, res) => {
  res.json('this is working');
});
router.post('/signup', _validate.validateSignup, _authUser.userController.signupUser);
router.post('/Login', _validate.validateLogin, _authUser.userController.signinUser);
router.get('/google', _passport.default.authenticate('google', {
  scope: ['email']
}));
router.get('/auth/google/callback', _passport.default.authenticate('google', {
  session: false
}), _authUser.userController.Auth);
router.get('/facebook', _passport.default.authenticate('facebook', {
  scope: ['email']
}));
router.get('/auth/facebook/callback', _passport.default.authenticate('facebook', {
  session: false
}), _authUser.userController.Auth);
var _default = router;
exports.default = _default;