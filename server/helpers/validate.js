import {
    check,
    validationResult
} from 'express-validator'

export const validateSignup = [
    check('first_name').isLength({
        min: 1
    })
    .trim()
    .escape()
    .withMessage('firstname field is required'),
    check('last_name')
    .isLength({
        min: 1
    })
    .trim()
    .escape()
    .withMessage('lastname field is required'),
    check('email')
    .isEmail()
    .isLength({
        min: 1
    })
    .trim()
    .escape()
    .withMessage('email field is required'),
    check('password')
    .isLength({
        min: 7
    })
    .trim()
    .withMessage('password must be more than 7 characters'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()
            })
        }
        return next();
    }
]

export const validateLogin = [
    check('email')
    .isEmail()
    .isLength({
        min: 1
    })
    .trim()
    .escape()
    .withMessage('email field is required'),
    check('password')
    .isLength({
        min: 7
    })
    .trim()
    .withMessage('password must be more than 7 characters'),
    (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: errors.array()
            })
        }
        return next();
    }
]