"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userController = void 0;

var _models = _interopRequireDefault(require("../database/models"));

var _crypt = require("../helpers/crypt");

var _jwt = require("../helpers/jwt");

var _response = require("../helpers/response");

var _errorHandler = require("../helpers/errorHandler");

class userController {
  static async signupUser(req, res, next) {
    const {
      first_name,
      last_name,
      email,
      password
    } = req.body;
    console.log(req.body);

    try {
      const foundUser = await _models.default.findUser(email);
      console.log('foundUser:', foundUser);

      if (foundUser.length > 0) {
        return (0, _errorHandler.handleError)('Email as been used', 400, next);
      }

      const newUser = {
        first_name,
        last_name,
        email,
        password: (0, _crypt.hashPassword)(password)
      };
      const registeredUser = await _models.default.save(newUser);
      console.log('registered:', registeredUser);
      const {
        user_id,
        dbpassword
      } = registeredUser[0];
      const user = {
        first_name,
        last_name,
        email,
        user_id,
        password: dbpassword
      };
      const token = await (0, _jwt.generateToken)(user);
      return (0, _response.sendResponse)(res, {
        data: token,
        success: true,
        statusCode: 200,
        message: 'user registered successfully'
      });
    } catch (e) {
      throw e;
    }
  }

  static async signinUser(req, res) {
    const {
      email,
      password
    } = req.body;

    try {
      const user = await _models.default.findUser(email);
      console.log(user);

      if (user) {
        const foundUser = await user[0].password;
        console.log('founduser:', foundUser);
        const isMatch = (0, _crypt.comparePassword)(password, foundUser);

        if (isMatch) {
          const token = await (0, _jwt.generateToken)(foundUser);
          return (0, _response.sendResponse)(res, {
            data: token,
            success: true,
            statusCode: 201,
            message: 'login successfully'
          });
        }

        return (0, _response.sendResponse)(res, {
          data: null,
          success: false,
          statusCode: 400,
          message: 'invalid login credentials'
        });
      }
    } catch (e) {
      return (0, _response.sendResponse)(res, {
        data: null,
        success: false,
        statusCode: 500,
        message: 'internal server error occured'
      });
    }
  }

  static async Auth(req, res) {
    return (0, _response.sendResponse)(res, {
      token: req.user
    });
  }

}

exports.userController = userController;