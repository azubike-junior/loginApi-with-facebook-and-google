import bcrypt from 'bcryptjs'

export const hashPassword = (password) => {
    const rounds = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, rounds)
}

export const comparePassword = (password, dbPassword) => bcrypt.compareSync(password, dbPassword)