import User from '../database/models';
import generateToken from '../helpers/jwt';

const getAccessFromGoogle = (access, token, profile, done) => {
    process.nextTick(async () => {
        try {
            const foundUser = await User.findUser(profile.email);
            if (!foundUser) {
                const displayName = profile.displayName.split(" ")
                const newUser = await new User({
                    email: profile.email,
                    firstName: displayName[0],
                    lastName: displayName[1]
                })
                await User.save(newUser)
                return done(null, generateToken(newUser))
            }
            return done(null, generateToken(newUser))
        } catch (e) {
            done(e, null)
        }
    })
}

export default getAccessFromGoogle