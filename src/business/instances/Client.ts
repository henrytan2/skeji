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
        let response : CreateResponse = {
            success: false,
        }
        let client : ClientPoco = {
            firstName: request.firstName,
            lastName: request.lastName,
            DOB: request.DOB,
            email: request.email,
            password: request.password,
            createdOn: request.createdOn,
            createdBy: request.createdBy,
            modifiedOn: request.modifiedOn,
            modifiedBy: request.modifiedBy,
        }
        client.email = request.email;
        client.createdBy = request.createdBy;
        client.createdOn = request.createdOn;
        client.modifiedBy = request.modifiedBy;
        client.modifiedOn = request.modifiedOn;
        client.DOB = request.DOB;
        client.firstName = request.firstName;
        client.lastName = request.lastName;
        client.password = request.password;
        try {
            DataSingleton.Client.Insert(client);
            response.success = true;
        } 
        catch (e) {
            // create account handling
        }
        return response;
    }

    async Login(email: string, password: string): Promise<LoginResponse >{
        let response : LoginResponse = {
            success : false,
        };
        try {
            let client = DataSingleton.Client.FetchByEmail(email);
            let passwordHashed = CryptoJS.SHA256(password).toString();
            response.success = false;
    
            if ((await client)?.password == passwordHashed) {
                response.success = true;
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