const {
    CLIENT_ID,
    CLIENT_SECRET,
    PORT
} = process.env

export default {
    clientSecret: CLIENT_SECRET,
    clientID: CLIENT_ID,
    callbackURL: `http://localhost:${PORT}/ap1/v1/auth/google`
}