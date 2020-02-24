import express from 'express';
import {
    userController
} from '../controllers/authUser'
import {
    validateSignup,
    validateLogin
} from '../helpers/validate'
import passport from 'passport'
const router = express.Router()

router.get('/send', (req, res) => {
    res.json('this is working')
})
router.post('/signup', validateSignup, userController.signupUser);

router.post('/Login', validateLogin, userController.signinUser);

router.get('/google', passport.authenticate('google', {
    scope: ['email']
}));

router.get('/auth/google/callback', passport.authenticate('google', {
    session: false
}), userController.Auth);

router.get('/facebook', passport.authenticate('facebook', {
    scope: ['email']
}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    session: false
}), userController.Auth);

export default router;