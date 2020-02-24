import getResonseFromDB from './migrate'

class Users {
    static async save(user) {
        const {
            first_name,
            last_name,
            email,
            password
        } = user;
        const sql = 'INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *'
        const params = [first_name, last_name, email, password];
        try {
            return await getResonseFromDB(sql, params)
        } catch (e) {
            throw e
        }
    }

    static async findUser(email) {
        const sql = 'SELECT * FROM users WHERE email = $1';
        const params = [email];
        try {
            return await getResonseFromDB(sql, params)
        } catch (e) {
            throw e
        }
    }

    static async findUserById(user_id) {
        const sql = 'SELECT * FROM users WHERE user_id = $1';
        const params = [user_id];
        try {
            return await getResonseFromDB(sql, params)
        } catch (e) {
            throw e
        }
    }

}

export default Users;