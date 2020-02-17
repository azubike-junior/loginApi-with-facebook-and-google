const {
    CLIENT_ID,
    CLIENT_SECRET,
    PORT,
    FB_CLIENT_ID,
    FB_CLIENT_SECRET
} = process.env

const passportGoogleConfig = {
    clientSecret: CLIENT_SECRET,
    clientID: CLIENT_ID,
    callbackURL: `http://localhost:${PORT}/api/v1/auth/google/callback`
}

const passportFacebookConfig = {
    clientID: FB_CLIENT_ID,
    clientSecret: FB_CLIENT_SECRET,
    callbackURL: `http://localhost:${PORT}/api/v1/auth/facebook/callback`
}

export {
    passportFacebookConfig,
    passportGoogleConfig
}