import {
    Pool
} from 'pg';

const {
    DATA_BASE
} = process.env;

const pool = new Pool({
    connectionString: DATA_BASE
})

export default pool;