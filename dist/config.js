"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passportGoogleConfig = exports.passportFacebookConfig = void 0;
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  PORT,
  FB_CLIENT_ID,
  FB_CLIENT_SECRET
} = process.env;
const passportGoogleConfig = {
  clientSecret: GOOGLE_CLIENT_SECRET,
  clientID: GOOGLE_CLIENT_ID,
  callbackURL: `https://login-api-v1.herokuapp.com/api/v1/auth/google/callback`
};
exports.passportGoogleConfig = passportGoogleConfig;
const passportFacebookConfig = {
  clientID: FB_CLIENT_ID,
  clientSecret: FB_CLIENT_SECRET,
  callbackURL: `https://localhost:3000/api/v1/auth/facebook/callback`
};
exports.passportFacebookConfig = passportFacebookConfig;