"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _users = _interopRequireDefault(require("./routes/users"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _passport = _interopRequireDefault(require("passport"));

var _passport2 = require("./controllers/passport");

_dotenv.default.config();

const port = process.env.PORT || 3000;
const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_passport.default.initialize());
app.use(_passport.default.session());
(0, _passport2.passportGoogleConfiguration)(_passport.default);
(0, _passport2.passportFacebookConfiguration)(_passport.default);
app.use('/api/v1', _users.default);
app.listen(port, () => console.log(`server running on port ${port}`));