import {
    getAccessFromGoogle,
    getAccessFromFacebook
} from '../helpers/passport';
import {
    passportGoogleConfig,
    passportFacebookConfig
} from '../config'
import {
    Strategy as GoogleStrategy
} from 'passport-google-oauth2'
import {
    Strategy as facebookStrategy
} from 'passport-facebook'

const passportGoogleConfiguration = passport => passport.use(new GoogleStrategy(passportGoogleConfig, getAccessFromGoogle));

const passportFacebookConfiguration = passport => passport.use(new facebookStrategy(passportFacebookConfig, getAccessFromFacebook))

export {
    passportGoogleConfiguration,
    passportFacebookConfiguration
}