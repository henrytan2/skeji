import IProvider from "../interfaces/IProvider";
import CreateRequest from "../poco/provider/requests/CreateRequest";
import CreateResponse from "../poco/provider/responses/CreateResponse";
import ForgotPasswordResponse from "../poco/provider/responses/ForgotPasswordResponse";
import LoginResponse from "../poco/provider/responses/LoginResponse";
import DataSingleton from "../../data/DataSingleton";
import CryptoJS from "crypto-js";
import ProviderPoco from "../../data/poco/Provider";
import ProviderDetails from "../../data/poco/ProviderDetails";

export default class Provider implements IProvider {

    Create(request: CreateRequest): CreateResponse {
        let response = new CreateResponse();
        let provider = new ProviderPoco();
        provider.CreatedBy = request.createdBy;
        provider.CreatedOn = request.createdOn;
        provider.Email = request.email;
        provider.Name = request.name;
        provider.Password = request.password;
        provider.ModifiedBy = request.modifiedBy;
        provider.ModifiedOn = request.modifiedOn;

        try {
            DataSingleton.Provider.Insert(provider);
            request.ProviderDetails.forEach(o => {
                let providerDetail = new ProviderDetails();
                providerDetail.providerUUID = o.providerUUID;
                providerDetail.key = o.key.toString();
                providerDetail.value = o.value;
                DataSingleton.ProviderDetails.Insert(providerDetail);
            });
            response.Success = true;
        } catch (error) {
            // create provider handling
        }
        return response;
    }

    public async Login(email: string, password: string): Promise<LoginResponse> {
        let response = new LoginResponse();
        try {
            let provider = DataSingleton.Provider.FetchByEmail(email);
            let passwordHashed = CryptoJS.SHA256(password).toString();
            
            response.Success = false;
    
            if ((await provider)?.Password == passwordHashed) {
                response.Success = true;
            }
        } catch (error) {
            // login error handling   
        }
        return response;
    }
    
    ForgotPassword(email: string): ForgotPasswordResponse {
        throw new Error("Method not implemented.");
    } 
}