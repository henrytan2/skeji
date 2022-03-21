import IClient from "../interfaces/IClient";
import CreateRequest from "../poco/client/requests/CreateRequest";
import CreateResponse from "../poco/client/responses/CreateResponse";
import LoginResponse from "../poco/client/responses/LoginResponse"
import ForgotPasswordResponse from "../poco/client/responses/ForgotPasswordResponse";
import CryptoJS from "crypto-js";
import DataSingleton from "../../data/DataSingleton";
import ClientPoco from "../../data/poco/Client";

export default class Client implements IClient {
    Create(request: CreateRequest): CreateResponse {
        let response = new CreateResponse();
        let client = new ClientPoco();
        client.Email = request.Email;
        client.CreatedBy = request.CreatedBy;
        client.CreatedOn = request.CreatedOn;
        client.ModifiedBy = request.ModifiedBy;
        client.ModifiedOn = request.ModifiedOn;
        client.DOB = request.DOB;
        client.FirstName = request.FirstName;
        client.LastName = request.LastName;
        client.Password = request.Password;
        try {
            DataSingleton.Client.Insert(client);
            response.Success = true;
        } 
        catch (e) {
            // create account handling
        }
        return response;
    }

    async Login(email: string, password: string): Promise<LoginResponse >{
        let response = new LoginResponse();
        try {
            let client = DataSingleton.Client.FetchByEmail(email);
            let passwordHashed = CryptoJS.SHA256(password).toString();
            response.Success = false;
    
            if ((await client)?.Password == passwordHashed) {
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