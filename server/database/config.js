import {
    Pool
} from 'pg';
import dotenv from 'dotenv'
dotenv.config()

const {
    DATA_BASE,
    DATABASE_URL,
    DEV_SECRET,
    PROD_SECRET
} = process.env;

const Development = {
    connectionString: DATA_BASE,
    jwt_secret: DEV_SECRET
}

const production = {
    connectionString: DATABASE_URL,
    jwt_secret: PROD_SECRET
}

const hero = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return production;

        default:
            return Development
    }
}

const pool = new Pool(hero())

export default pool;