import pool from '../dbconfig/dbconnector';

class HomeController {
    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM Appointments";

            const { rows } = await client.query(sql);
            const appointments = rows;

            client.release();

            res.send(appointments);
        }
        catch(error) {
            res.status(400).send(error);
        }
    }
}

export default HomeController;