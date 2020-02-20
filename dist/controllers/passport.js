"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passportFacebookConfiguration = exports.passportGoogleConfiguration = void 0;

var _passport = require("../helpers/passport");

var _config = require("../config");

var _passportGoogleOauth = require("passport-google-oauth2");

var _passportFacebook = require("passport-facebook");

const passportGoogleConfiguration = passport => passport.use(new _passportGoogleOauth.Strategy(_config.passportGoogleConfig, _passport.getAccessFromGoogle));

exports.passportGoogleConfiguration = passportGoogleConfiguration;

const passportFacebookConfiguration = passport => passport.use(new _passportFacebook.Strategy(_config.passportFacebookConfig, _passport.getAccessFromFacebook));

exports.passportFacebookConfiguration = passportFacebookConfiguration;