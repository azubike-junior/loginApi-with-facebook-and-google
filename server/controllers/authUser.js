import Users from '../database/models';
import {
    hashPassword,
    comparePassword
} from '../helpers/crypt'
import {
    generateToken
} from '../helpers/jwt';
import {
    sendResponse
} from '../helpers/response'
import {
    handleError
} from '../helpers/errorHandler'

export class userController {
    static async signupUser(req, res, next) {
        const {
            first_name,
            last_name,
            email,
            password
        } = req.body
        try {
            const foundUser = await Users.findUser(email);
            if (foundUser.length > 0) {
                return handleError('Email as been used', 400, next)
            }
            const newUser = {
                first_name,
                last_name,
                email,
                password: hashPassword(password)
            };
            const registeredUser = await Users.save(newUser);
            console.log('registered:', registeredUser)
            const {
                user_id,
                dbpassword
            } = registeredUser[0];
            const user = {
                first_name,
                last_name,
                email,
                user_id,
                password: dbpassword,
            }
            const token = await generateToken(user)
            return sendResponse(
                res, {
                    data: token,
                    success: true,
                    statusCode: 200,
                    message: 'user registered successfully'
                }
            )
        } catch (e) {
            throw e
        }
    }

    static async signinUser(req, res) {
        const {
            email,
            password
        } = req.body
        try {
            const user = await Users.findUser(email)
            console.log(user)
            if (user) {
                const foundUser = await user[0].password
                console.log('founduser:', foundUser)
                const isMatch = comparePassword(password, foundUser)
                if (isMatch) {
                    const token = await generateToken(foundUser)
                    return sendResponse(
                        res, {
                            data: token,
                            success: true,
                            statusCode: 201,
                            message: 'login successfully'
                        }
                    )
                }
                return sendResponse(
                    res, {
                        data: null,
                        success: false,
                        statusCode: 400,
                        message: 'invalid login credentials'
                    }
                )
            }
        } catch (e) {
            return sendResponse(
                res, {
                    data: null,
                    success: false,
                    statusCode: 500,
                    message: 'internal server error occured'
                }
            )
        }
    }

    static async Auth(req, res) {
        return sendResponse(res, {
            token: req.user
        })
    }
}