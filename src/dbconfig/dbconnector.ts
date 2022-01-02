import { Pool } from 'pg';

export default new Pool({
    max: 20,
    connectionString: process.env.POSTGRES_CONN_STRING,
    idleTimeoutMillis: 30000,
});