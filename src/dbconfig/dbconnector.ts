import { Pool } from 'pg';

export default new Pool({
    max: 20,
    connectionString: 'postgres://henry:password@localhost:5432/appointmentsDB',
    idleTimeoutMillis: 30000,
});