import pool from '../dbconfig/dbconnector';

class HomeController {
    public async post(req, res) {
        try {
            res.send('asdf');
        }
        catch(error) {
            res.status(400).send(error);
        }
    }
}

export default HomeController;