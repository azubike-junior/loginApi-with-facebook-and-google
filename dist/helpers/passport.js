"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccessFromFacebook = exports.getAccessFromGoogle = void 0;

var _models = _interopRequireDefault(require("../database/models"));

const getAccessFromGoogle = (access, token, profile, done) => {
  process.nextTick(async () => {
    try {
      const foundUser = await _models.default.findUser(profile.email);
      console.log('foudder', foundUser);

      if (foundUser) {
        return done(null, foundUser);
      }

      const newUser = await new _models.default({
        id: profile.id,
        email: profile.emails[0].value
      });
      await _models.default.save(newUser);
      return done(null, newUser);
    } catch (e) {
      done(e, null);
    }
  });
};

exports.getAccessFromGoogle = getAccessFromGoogle;

const getAccessFromFacebook = (access, token, profile, done) => {
  process.nextTick(async () => {
    try {
      const foundUser = await _models.default.findUser(profile.emails[0].value);

      if (foundUser) {
        return done(null, foundUser);
      }

      const newUser = await new _models.default({
        id: profile.id,
        email: profile.emails[0].value
      });
      await _models.default.save(newUser);
      return done(null, newUser);
    } catch (e) {
      console.log(e);
      done(e, null);
    }
  });
};

exports.getAccessFromFacebook = getAccessFromFacebook;