import Business from "../../business/Business";
import CreateRequest from "../../business/poco/client/requests/CreateRequest";
import ClientDetails from "../../business/poco/client/enums/ClientDetails";
import IClientDetail from "../../business/poco/client/IClientDetails";

export default class LoginController { 
    public async login(req, res) {
        try {
            let response = false;
            let email = req.body["email"];
            let password = req.body['password'];
            let loginResponse = Business.Client.Login(email, password);
            if ((await loginResponse).Success) {
                response = true;
            }
            return res.send(response);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
    public async create(req, res) {
        try {
            let response = false;
            let firstName = req.body['firstName'];
            let lastName = req.body['lastName'];
            let email = req.body['email'];
            let password = req.body['password'];
            let address1 = req.body['address1'];
            let address2 = req.body['address2'];
            let city = req.body['city'];
            let state = req.body['state'];
            let zip = req.body['zip'];
            let createRequest = new CreateRequest();
            createRequest.email = email;
            createRequest.FirstName = firstName;
            createRequest.LastName = lastName;
            createRequest.password = password;
            
            createRequest.ClientDetails.push({
                key: ClientDetails.Address1,
                value: address1,
            } as IClientDetail);
            createRequest.ClientDetails.push({
                key: ClientDetails.Address2,
                value: address2,
            } as IClientDetail)
            createRequest.ClientDetails.push({
                key: ClientDetails.City,
                value: city,
            } as IClientDetail)
            createRequest.ClientDetails.push({
                key: ClientDetails.State,
                value: state,
            } as IClientDetail)
            createRequest.ClientDetails.push({
                key: ClientDetails.Zip,
                value: zip,
            } as IClientDetail)

            let createResponse = await Business.Client.Create(createRequest);
            if ((createResponse.Success)) {
                response = true;
            }
            return res.send(response); }
            catch (e) {
                // error handling
            }
    }
}