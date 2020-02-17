import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();
const {
    DEV_SECRET
} = process.env

export const generateToken = (user) => {
    return jwt.sign({
        sub: user
    }, DEV_SECRET)
}