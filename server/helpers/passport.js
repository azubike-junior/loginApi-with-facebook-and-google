import User from '../database/models';

const getAccessFromGoogle = (access, token, profile, done) => {
    process.nextTick(async () => {
        try {
            const foundUser = await User.findUser(profile.email);
            console.log('foudder', foundUser)
            if (foundUser) {
                return done(null, foundUser)
            }
            const newUser = await new User({
                id: profile.id,
                email: profile.emails[0].value
            })
            await User.save(newUser)
            return done(null, newUser)
        } catch (e) {
            done(e, null)
        }
    })
}

const getAccessFromFacebook = (access, token, profile, done) => {
    process.nextTick(async () => {
        try {
            const {
                id,
                displayName,
                email
            } = profile
            const foundUser = await User.findUser(email);
            console.log('foudder', foundUser)
            if (!foundUser.length) {
                const newUser = await new User({
                    fb_id: id,
                    fb_email: profile.emails[0].value,
                    display_name: displayName
                })
                await User.save(newUser)
                return done(null, newUser)
            }
            return done(null, foundUser)
        } catch (e) {
            done(e, null)
        }
    })
}

export {
    getAccessFromGoogle,
    getAccessFromFacebook
}