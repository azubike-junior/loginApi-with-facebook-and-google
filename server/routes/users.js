import express from 'express';
import {
    userController
} from '../controllers/authUser'
import {
    validateSignup,
    validateLogin
} from '../helpers/validate'
import passport from 'passport'
const passportLogin = passport.authenticate('local', {
    session: false
})

const router = express.Router()

router.post('/signup', validateSignup, userController.signupUser);

router.post('/Login', validateLogin, passportLogin, userController.signinUser);

router.get('/google', passport.authenticate('google', {
    scope: ['profile, email']
}));

router.get('/google/callback', passport.authenticate('google', {
    session: false
}), userController.Auth);
export default router;