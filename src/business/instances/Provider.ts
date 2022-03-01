import IProvider from "../interfaces/IProvider";
import CreateRequest from "../poco/provider/requests/CreateRequest";
import CreateResponse from "../poco/provider/responses/CreateResponse";
import ForgotPasswordResponse from "../poco/provider/responses/ForgotPasswordResponse";
import LoginResponse from "../poco/provider/responses/LoginResponse";
import DataSingleton from "../../data/DataSingleton";
import CryptoJS from "crypto-js";

export default class Provider implements IProvider {
    Create(request: CreateRequest): CreateResponse {
        throw new Error("Method not implemented.");
    }

    async Login(email: string, password: string): Promise<LoginResponse> {
        let provider = DataSingleton.Provider.FetchByEmail(email);
        let passwordHashed = CryptoJS.SHA256(password).toString();
        let response = new LoginResponse();
        response.Success = false;

        if ((await provider)?.Password == passwordHashed) {
            response.Success = true;
        }
        return response;
    }
    
    ForgotPassword(email: string): ForgotPasswordResponse {
        throw new Error("Method not implemented.");
    } 
}