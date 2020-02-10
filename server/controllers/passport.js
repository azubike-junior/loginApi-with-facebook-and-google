import passport from 'passport';
import passportConfig from '../config';
import getAccessFromGoogle from '../helpers/passport';
import {
    Strategy as GoogleStrategy
} from 'passport-google-oauth2'
import {
    Strategy as localStrategy
} from 'passport-local'
import User from '../database/models'
import comparePassword from '../helpers/crypt'

passport.use(new localStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const foundUser = await User.findUser(email)
        if (!foundUser) {
            return done(null, false);
        }
        const isMatch = comparePassword(password, foundUser[0].password);
        console.log(isMatch)
        if (!isMatch) {
            return done(null, false)
        }
        return done(null, foundUser)
    } catch (error) {
        done(error, false)
    }
}));

const passportConfiguration = passport => passport.use(new GoogleStrategy(passportConfig, getAccessFromGoogle));

export default passportConfiguration;