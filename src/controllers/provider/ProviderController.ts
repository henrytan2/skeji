import Business from '../../business/Business';

export default class LoginController {
    public async login(req, res) {
        try {
            let response = false;
            let email = req.body['email'];
            let password = req.body['password'];
            let loginResponse = Business.Provider.Login(email, password);
            if ((await loginResponse).Success) {
                response = true;
            }
            return res.send(response);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }         
}