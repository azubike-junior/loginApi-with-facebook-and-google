const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, PORT, FB_CLIENT_ID, FB_CLIENT_SECRET } = process.env;

const passportGoogleConfig = {
	clientSecret: GOOGLE_CLIENT_SECRET,
	clientID: GOOGLE_CLIENT_ID,
	callbackURL: `https://login-api-v1.herokuapp.com/api/v1/auth/google/callback`
};

const passportFacebookConfig = {
	clientID: FB_CLIENT_ID,
	clientSecret: FB_CLIENT_SECRET,
	callbackURL: `https://login-api-v1.herokuapp.com/api/v1/auth/facebook/callback`
};

export { passportFacebookConfig, passportGoogleConfig };
