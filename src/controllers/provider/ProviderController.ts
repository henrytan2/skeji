import Business from '../../business/Business';
import CreateRequest from '../../business/poco/provider/requests/CreateRequest';
import ProviderDetails from '../../business/poco/provider/enums/ProviderDetails';
import IProviderDetail from '../../business/poco/provider/IProviderDetail';

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
    
    public async create(req, res) {
        try {
            let response = false;
            let name = req.body['name'];
            let email = req.body['email'];
            let password = req.body['password'];
            let address1 = req.body['address1'];
            let address2 = req.body['address2'];
            let city = req.body['city'];
            let state = req.body['state'];
            let zip = req.body['zip'];
            let createRequest = new CreateRequest();
            createRequest.email = email;
            createRequest.name = name;
            createRequest.password = password;
            
            createRequest.ProviderDetails.push({
                key: ProviderDetails.Address1,
                value: address1,
            } as IProviderDetail);
            createRequest.ProviderDetails.push({
                key: ProviderDetails.Address2,
                value: address2,
            } as IProviderDetail)
            createRequest.ProviderDetails.push({
                key: ProviderDetails.City,
                value: city,
            } as IProviderDetail)
            createRequest.ProviderDetails.push({
                key: ProviderDetails.State,
                value: state,
            } as IProviderDetail)
            createRequest.ProviderDetails.push({
                key: ProviderDetails.Zip,
                value: zip,
            } as IProviderDetail)

            let createResponse = Business.Provider.Create(createRequest);
            if ((await createResponse.Success)) {
                response = true;
            }
            return res.send(response);
        }
        catch (error) {
            res.status(400).send(error)
        }

    }
}